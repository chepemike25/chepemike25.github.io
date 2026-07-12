(function () {
  'use strict';

  const root = document.documentElement;
  const storageKey = 'mc-theme';

  function currentTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
  }

  applyTheme(currentTheme());

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function () {
        const next =
          root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }

    const menuBtn = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (menuBtn && menu) {
      menuBtn.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
      });

      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('is-open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    const currentPath = location.pathname.replace(/\/index\.html$/, '/');
    document
      .querySelectorAll('[data-nav] a')
      .forEach(function (link) {
        const href = link.getAttribute('href');
        if (!href) return;
        const normalized = href.replace(/\/index\.html$/, '/');
        const isHome =
          normalized === '/' || normalized === 'index.html' || normalized === './';
        const matchHome =
          isHome &&
          (currentPath === '/' ||
            currentPath === '' ||
            currentPath.endsWith('/index.html'));
        if (matchHome || (!isHome && currentPath.endsWith(normalized))) {
          link.setAttribute('aria-current', 'page');
        }
      });

    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  });
})();
