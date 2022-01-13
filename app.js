const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error('check selection ' + selection);
  }
};

const btnsContainer = get('.tab-btns');
const allTabs = document.querySelectorAll('.features-content-container');
const allBtns = document.querySelectorAll('.tab-btn');

btnsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-btn')) {
    const id = e.target.dataset.id;
    const tab = get(`#${id}`);
    allTabs.forEach((tab) => tab.classList.remove('show'));
    tab.classList.add('show');

    allBtns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');
  }
});

const allQuestions = document.querySelectorAll('.question');

allQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    allQuestions.forEach((q) => {
      if (q !== question) {
        q.parentElement.classList.remove('show-answer');
      }
    });
    question.parentElement.classList.toggle('show-answer');
  });
});

const barsBtn = get('.mob-btn');
const sidemenu = get('.mobile-menu');
const closeMenu = get('.close-mobile');
const mobLinks = document.querySelectorAll('.mob-link');

barsBtn.addEventListener('click', () => {
  sidemenu.classList.add('show-mobile');
});

closeMenu.addEventListener('click', () => {
  sidemenu.classList.remove('show-mobile');
});

mobLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidemenu.classList.remove('show-mobile');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    sidemenu.classList.remove('show-mobile');
  }
});

const form = get('.contact-form');
const input = get('#email-input');
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const check = pattern.test(input.value);
  if (!check) {
    form.classList.add('show-warning');
    setTimeout(() => {
      form.classList.remove('show-warning');
    }, 2000);
    return;
  }
  input.blur();
  form.reset();
});
