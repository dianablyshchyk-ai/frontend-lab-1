const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const counterValue = document.getElementById('counter-value');
const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDarkTheme ? 'dark' : 'light');

document.documentElement.dataset.theme = initialTheme;
themeToggle.setAttribute('aria-pressed', initialTheme === 'dark');
themeToggle.textContent = initialTheme === 'dark' ? 'Світла тема' : 'Темна тема';

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  themeToggle.setAttribute('aria-pressed', nextTheme === 'dark');
  themeToggle.textContent = nextTheme === 'dark' ? 'Світла тема' : 'Темна тема';
});