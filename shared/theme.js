(function() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  // Sync checkbox: checked = dark mode
  const isDark = document.documentElement.hasAttribute('data-theme');
  toggle.checked = isDark;

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    window.dispatchEvent(new Event('themechange'));
  });
})();