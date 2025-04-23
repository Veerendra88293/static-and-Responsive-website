const paragraphs = document.querySelectorAll('.carousel p');
let currentParagraph = 0;

setInterval(() => {
  paragraphs[currentParagraph].classList.remove('active');
  currentParagraph = (currentParagraph + 1) % paragraphs.length;
  paragraphs[currentParagraph].classList.add('active');
}, 2000);
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const icon = item.querySelector('.accordion-icon');
    if (item.classList.contains('active')) {
      icon.textContent = '-';
    } else {
      icon.textContent = '+';
    }
  });
});