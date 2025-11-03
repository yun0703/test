// script.js
function sayHello() {
  const messages = [
    "안녕! 만나서 반가워요 😊",
    "오늘도 웃는 하루 보내요 🌼",
    "코딩은 재밌는 놀이에요 🎨",
    "함께 해줘서 고마워요 💖"
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}

// 별을 랜덤하게 배경에 추가
for (let i = 0; i < 25; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = `${Math.random() * 4 + 2}px`;
  star.style.height = star.style.width;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  document.body.appendChild(star);
}
