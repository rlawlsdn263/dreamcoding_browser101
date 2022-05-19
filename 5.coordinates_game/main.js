const target = document.querySelector('.target');
const lineX = document.querySelector('.lineX');
const lineY = document.querySelector('.lineY');

const coordinates = document.querySelector('.coordinates');

window.addEventListener('mousemove', (e) => {
    coordinates.innerText = `${e.clientX}px, ${e.clientY}px`;
    target.style.cssText = `
    left: ${e.clientX - 60}px;
    top:  ${e.clientY - 60}px;
  `;
    lineX.style.cssText = `
    left: ${e.clientX - 1600}px;
    top:  ${e.clientY}px;
  `;
    lineY.style.cssText = `
    left: ${e.clientX}px;
    top:  ${e.clientY - 1600}px;
  `;
    coordinates.style.cssText = `
    left: ${e.clientX + 25}px;
    top:  ${e.clientY + 25}px;
  `;
});

//참고 자료
// https://stackoverflow.com/questions/58807504/element-following-mouse-movement-and-scroll
