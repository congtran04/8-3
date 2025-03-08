 {
    // Đảm bảo chỉ hiển thị lời chúc ban đầu, thư ẩn
    document.getElementById('letter').style.display = 'none';
};

function openLetter() {
    document.getElementById('letter').style.display = 'block'; // Hiện thư
    document.getElementById('greeting').style.display = 'none'; // Ẩn chúc mừng 8/3
}

function closeLetter() {
    document.getElementById('letter').style.display = 'none'; // Ẩn thư đi
    document.getElementById('greeting').style.display = 'block'; // Hiện lại chúc mừng 8/3 nếu muốn
}

// Tạo trái tim bay
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);