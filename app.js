// 深色模式与回到顶部，两个演示用的最小交互。
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('aster-theme');

  if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
    toggle.textContent = '浅色';
  }

  toggle.addEventListener('click', function () {
    const dark = root.getAttribute('data-theme') === 'dark';
    if (dark) {
      root.removeAttribute('data-theme');
      toggle.textContent = '深色';
      localStorage.setItem('aster-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      toggle.textContent = '浅色';
      localStorage.setItem('aster-theme', 'dark');
    }
  });

  const toTop = document.getElementById('toTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      toTop.classList.add('visible');
    } else {
      toTop.classList.remove('visible');
    }
  });

  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
