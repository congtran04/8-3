document.addEventListener("DOMContentLoaded", function () {
    const letter = document.getElementById("letter");
    const greeting = document.getElementById("greeting");

    window.openLetter = function () {
        letter.style.display = "block";
        greeting.style.display = "none"; // Ẩn phần chúc mừng khi mở thư
    };

    window.closeLetter = function () {
        letter.style.display = "none";
        greeting.style.display = "flex"; // Hiển thị lại phần chúc mừng sau khi đóng thư
    };

    // Tạo hiệu ứng trái tim rơi
    setInterval(() => createFloatingItem("❤️"), 500);

    // Tạo hiệu ứng hoa bay
    setInterval(() => createFloatingItem("🌸"), 700);

    function createFloatingItem(symbol) {
        const item = document.createElement("div");
        item.classList.add("floating-item");
        item.innerText = symbol;
        item.style.left = Math.random() * window.innerWidth + "px";
        item.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 giây
        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 5000);
    }
});
