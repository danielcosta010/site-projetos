const nav = document.querySelector('.nav');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');


function clickMenu(event) {
  if(event.type === 'touchstart')
    event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle('active')
  
    clickForaDoMenu(menu, () => {
    nav.classList.remove('active');
    setAria();
  })
  setAria();
}

function clickForaDoMenu(elementoAlvo, callback) {
  const html = document.documentElement;
  
  function handleHTMLClick(event) {
    if(!elementoAlvo.contains(event.target)) {
      elementoAlvo.removeAttribute('data-target');
      html.removeEventListener('click', handleHTMLClick);
      html.removeEventListener('touchstart', handleHTMLClick);
      callback()
    }
  }
    if(!elementoAlvo.hasAttribute('data-target')) {
      html.addEventListener('click', handleHTMLClick);
      html.addEventListener('touchstart', handleHTMLClick);
      elementoAlvo.setAttribute('data-target', '');
    }
}

function setAria() {
  const estaAtivo = nav.classList.contains('active');
  btnMenu.setAttribute('aria-expanded', estaAtivo);
  if (estaAtivo) {
    btnMenu.setAttribute('aria-label', 'Fechar Menu');
  } else {
    btnMenu.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMenu.addEventListener('click', clickMenu);
btnMenu.addEventListener('touchstart', clickMenu);