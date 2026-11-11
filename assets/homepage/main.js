(() => {
  const button = document.getElementById('theme');
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let chosen = null;
  try { chosen = localStorage.getItem('keien-theme'); } catch (_) { /* Storage may be disabled. */ }
  const apply = (dark) => {
    root.dataset.theme = dark ? 'dark' : 'light';
    button.setAttribute('aria-pressed', String(dark));
    button.textContent = dark ? '切换日间' : '切换夜间';
  };
  apply(chosen === 'dark' || (chosen !== 'light' && preference.matches));
  button.hidden = false;
  button.addEventListener('click', () => {
    chosen = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(chosen === 'dark');
    try { localStorage.setItem('keien-theme', chosen); } catch (_) { /* The toggle still works. */ }
  });
  preference.addEventListener('change', (event) => {
    if (chosen !== 'dark' && chosen !== 'light') apply(event.matches);
  });
})();
