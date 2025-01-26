let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let recognitionInterval = null;

// Setup webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        // Start drawing guide box
        drawGuideBox();
    })
    .catch(err => {
        console.error("Error accessing webcam:", err);
    });

function drawGuideBox() {
    if (!recognitionInterval) {
        requestAnimationFrame(drawGuideBox);
    }
    
    // Draw the current video frame
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Draw guide box
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.strokeRect(100, 100, 200, 200);
    
    // Add instruction text
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 70, 200, 25);
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.fillText('Place sign in this box', 120, 88);
}

// Capture sign
document.getElementById('capture-btn').addEventListener('click', async () => {
    const signName = document.getElementById('sign-name').value;
    if (!signName) {
        alert('Please enter a sign name');
        return;
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const frame = canvas.toDataURL('image/jpeg');

    try {
        const response = await fetch('/capture_sign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sign_name: signName,
                frame: frame
            })
        });
        const data = await response.json();
        if (data.status === 'success') {
            alert(`Successfully captured sign: ${signName}`);
            document.getElementById('sign-name').value = '';  // Clear input
        }
    } catch (error) {
        console.error('Error capturing sign:', error);
        alert('Error capturing sign. Please try again.');
    }
});

// Start recognition
document.getElementById('start-recognition').addEventListener('click', () => {
    if (recognitionInterval) return;
    
    canvas.style.display = 'block';  // Show the canvas
    video.style.display = 'none';    // Hide the video
    
    recognitionInterval = setInterval(async () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // Draw guide box during recognition
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.strokeRect(100, 100, 200, 200);
        
        const frame = canvas.toDataURL('image/jpeg');

        try {
            const response = await fetch('/recognize_sign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ frame: frame })
            });
            const data = await response.json();
            
            if (data.sign) {
                document.getElementById('recognized-sign').textContent = 
                    `${data.sign} (Confidence: ${data.score.toFixed(1)}%)`;
            } else {
                document.getElementById('recognized-sign').textContent = 
                    'No sign recognized';
            }
        } catch (error) {
            console.error('Error recognizing sign:', error);
        }
    }, 1000); // Check every second
});

// Stop recognition
document.getElementById('stop-recognition').addEventListener('click', () => {
    if (recognitionInterval) {
        clearInterval(recognitionInterval);
        recognitionInterval = null;
        document.getElementById('recognized-sign').textContent = 'None';
        canvas.style.display = 'none';   // Hide the canvas
        video.style.display = 'block';   // Show the video
        drawGuideBox();  // Restart guide box drawing
    }
}); 