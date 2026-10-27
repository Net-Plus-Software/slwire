(() => {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');

  const closeMenu = () => {
    if (!toggle || !menu) return;
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const helper = document.createElement('textarea');
        helper.value = value;
        helper.setAttribute('readonly', '');
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        helper.remove();
      }

      const previous = button.textContent;
      button.textContent = 'Copied';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.textContent = previous;
        button.classList.remove('is-copied');
      }, 1600);
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
