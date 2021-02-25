export const toggleTheme = () => {
  const body = document.querySelector("body");
  const theme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
};
