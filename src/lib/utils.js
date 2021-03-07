export const changeTheme = theme => {
  const body = document.querySelector("body");
  body.setAttribute('data-theme', theme);
};

export const getThemePreference = () => {
  if (window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const openLink = link => window.open(link);
