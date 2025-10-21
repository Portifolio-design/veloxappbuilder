let speed = 0;
let distance = 0;
let interval;

document.getElementById('start-btn').addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            speed = Math.floor(Math.random() * 40);
            distance += speed * 0.01;
            document.getElementById('speed').textContent = speed;
            document.getElementById('distance').textContent = distance.toFixed(2);
        }, 1000);
    }
});