const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const h22 = document.querySelector('h2');

const superEventHandler = {
  mouseleave: function handleMouseleave() {
    h22.innerHTML = 'mouseleave';
    h22.style.color = colors[1];
  },
  mouseover: function handleMouseover() {
    h22.innerHTML = 'mouseover';
    h22.style.color = colors[2];
  },
  resize: function handleResize() {
    h22.innerHTML = 'resize';
    h22.style.color = colors[3];
  },
  contextmenu: function handleContextmenu() {
    h22.innerHTML = 'rightclick';
    h22.style.color = colors[4];
  },
};

h22.addEventListener('mouseleave', superEventHandler.mouseleave);
h22.addEventListener('mouseover', superEventHandler.mouseover);
window.addEventListener('resize', superEventHandler.resize);
h22.addEventListener('contextmenu', superEventHandler.contextmenu);
