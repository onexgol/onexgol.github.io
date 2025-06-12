document.getElementById("toggleButton").addEventListener("click", function() {
    var videoContainer = document.getElementById("videoContainer");
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "block";
        this.textContent = "▲";
    } else {
        videoContainer.style.display = "none";
        this.textContent = "▼";
    }
});

function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('time').textContent = now.toLocaleTimeString('ru-RU', options);
}

setInterval(updateTime, 1000);
updateTime();
