
// تأثير دخول بسيط
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("body");
  content.style.opacity = 0;
  content.style.transform = "translateY(30px)";
  setTimeout(() => {
    content.style.transition = "all 0.8s ease";
    content.style.opacity = 1;
    content.style.transform = "translateY(0)";
  }, 300);
});
