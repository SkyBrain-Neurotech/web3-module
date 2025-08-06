// Node.js script to create PNG icons
const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#00d4ff');
  gradient.addColorStop(1, '#667eea');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Draw brain shape
  ctx.strokeStyle = 'white';
  ctx.lineWidth = size / 32;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  const scale = size / 192;
  
  ctx.save();
  ctx.translate(size/2, size/2);
  ctx.scale(scale, scale);
  
  // Brain outline
  ctx.beginPath();
  ctx.moveTo(-40, 0);
  ctx.bezierCurveTo(-40, -30, -30, -40, 0, -40);
  ctx.bezierCurveTo(30, -40, 40, -30, 40, 0);
  ctx.bezierCurveTo(40, 30, 30, 40, 0, 40);
  ctx.bezierCurveTo(-30, 40, -40, 30, -40, 0);
  ctx.stroke();
  
  // Brain center line
  ctx.beginPath();
  ctx.moveTo(0, -40);
  ctx.lineTo(0, 40);
  ctx.stroke();
  
  // Neural dots
  ctx.fillStyle = 'white';
  const dots = [[-25, -15], [25, -15], [-25, 15], [25, 15], [-15, 0], [15, 0]];
  dots.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.restore();
  
  return canvas.toBuffer('image/png');
}

// Create 192x192 icon
fs.writeFileSync('icon-192.png', createIcon(192));
console.log('Created icon-192.png');

// Create 512x512 icon
fs.writeFileSync('icon-512.png', createIcon(512));
console.log('Created icon-512.png');