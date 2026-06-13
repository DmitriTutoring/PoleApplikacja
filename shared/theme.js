(function() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const icon = document.querySelector('.toggle-icon');

  function updateIcon() {
    if (!icon) return;
    const isDark = document.documentElement.hasAttribute('data-theme');
    icon.textContent = isDark ? '☀️' : '🌙';
  }

  // Sync checkbox with current theme
  toggle.checked = document.documentElement.hasAttribute('data-theme');
  updateIcon();

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    updateIcon();
    window.dispatchEvent(new Event('themechange'));
  });
})();
