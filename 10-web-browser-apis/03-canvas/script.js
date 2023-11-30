const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = '#F42922';
ctx.fillRect(10, 10, 150, 100);

// Draw a circle
ctx.fillStyle = '#0094FE';
ctx.arc(300, 300, 80, 0 ,Math.PI * 2);
ctx.fill();

// Draw lines
ctx.beginPath();
ctx.strokeStyle = '#black';
ctx.lineWidth = 5;
ctx.moveTo(85, 60);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = '#8517AC';
ctx.fillText('Hello World', 300, 100, 300); // le dernier 300 c'est pour le max-width
ctx.lineWidth = 1;
ctx.strokeStyle = '#8517AC'
ctx.strokeText('Hello World', 300, 500, 300)

const img = document.querySelector('img');
img.style.display = 'none';

img.addEventListener('load', () => ctx.drawImage(img, 250, 250, 100, 100));