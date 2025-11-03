// script.js
// script.js
function sayHello() {
  const greetings = [
    "안녕! 반가워요 😊",
    "오늘도 행복한 하루 보내요 🌷",
    "코딩은 마법 같은 놀이지 🎠",
    "함께라서 더 즐거워요 💖"
  ];
  alert(greetings[Math.floor(Math.random() * greetings.length)]);
}

// 별 반짝임 효과
for (let i = 0; i < 30; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = `${Math.random() * 3 + 2}px`;
  star.style.height = star.style.width;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 4}s`;
  document.body.appendChild(star);
}
