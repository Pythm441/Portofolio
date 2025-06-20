// Matrix Rain Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters (mix of katakana, numbers, and symbols)
const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

// Array to store the y position of each column
const drops = new Array(columns).fill(0);

// Matrix rain animation
function drawMatrix() {
    // Add translucent black background to create trailing effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set text properties
    ctx.fillStyle = '#00ff41'; // Matrix green
    ctx.font = `${fontSize}px monospace`;
    
    // Draw characters
    for (let i = 0; i < drops.length; i++) {
        // Pick random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Draw character
        ctx.fillStyle = drops[i] * fontSize > canvas.height && Math.random() > 0.975 
            ? '#ffffff' // Bright white for leading character
            : '#00ff41'; // Matrix green for trailing characters
            
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Move drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset to top
        }
        drops[i]++;
    }
}

// Start animation
setInterval(drawMatrix, 50);

// Additional effects for the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Add typing sound effect simulation
    const typingElements = document.querySelectorAll('.typing-animation');
    
    // Add glitch effect to terminal title
    const terminalTitle = document.querySelector('.terminal-title');
    if (terminalTitle) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                terminalTitle.style.textShadow = '2px 0 #ff0000, -2px 0 #00ffff';
                setTimeout(() => {
                    terminalTitle.style.textShadow = 'none';
                }, 100);
            }
        }, 2000);
    }
    
    // Add random flicker to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        setInterval(() => {
            if (Math.random() > 0.98) {
                tag.style.boxShadow = '0 0 10px #00ff41';
                setTimeout(() => {
                    tag.style.boxShadow = 'none';
                }, 200);
            }
        }, 3000);
    });
    
    // Scanning line effect removed for better readability
    
    // Terminal cursor blink effect for prompts
    const prompts = document.querySelectorAll('.terminal-prompt');
    prompts.forEach(prompt => {
        const cursor = document.createElement('span');
        cursor.textContent = '_';
        cursor.style.cssText = `
            animation: blink 1s infinite;
            color: #00ff41;
        `;
        prompt.appendChild(cursor);
    });
    
    // Add blink animation
    const blinkStyle = document.createElement('style');
    blinkStyle.textContent += `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(blinkStyle);
});