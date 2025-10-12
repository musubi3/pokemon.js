try { navigator.mediaSession?.setActionHandler('enterpictureinpicture', null); } catch (e) { }

(function () {
  // Get theme from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');

  // Also check localStorage for consistency
  const savedTheme = localStorage.colorScheme;

  // Priority: URL param > localStorage > system preference
  let finalTheme;
  if (theme === 'light' || theme === 'dark') {
    finalTheme = theme;
  } else if (savedTheme === 'light' || savedTheme === 'dark') {
    finalTheme = savedTheme;
  } else {
    // Auto mode - use system preference
    finalTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (finalTheme === 'light' || finalTheme === 'dark') {
    document.documentElement.setAttribute('color-scheme', finalTheme);
    document.documentElement.style.setProperty('color-scheme', finalTheme);
    localStorage.colorScheme = finalTheme;
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "/"
    : "https://musubi3.github.io/";

  let pages = [
    { url: 'index.html', title: 'Home' },
    { url: 'resume/index.html', title: 'Resume' },
    { url: 'projects/index.html', title: 'Projects' },
    { url: 'contact/index.html', title: 'Contact' },
    { url: 'https://github.com/musubi3', title: 'GitHub' },
    { url: 'https://www.linkedin.com/in/justin-lee-634719352/', title: 'LinkedIn' }
  ];

  // Create nav wrapper
  let navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';

  // Create menu toggle button
  let toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Toggle menu');
  toggle.textContent = '☰';

  // Create nav element with ID
  let nav = document.createElement('nav');
  nav.id = 'main-nav';

  // Add links to navigation
  for (let p of pages) {
    let url = p.url;
    let title = p.title;

    // Handle URL construction
    if (!url.startsWith('http')) {
      url = BASE_PATH + url;
    }

    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;

    // Highlight current page    
    if (a.pathname === '/projects/index.html') {
      a.classList.add('current');
    }

    // Open external links in new tab
    if (a.host !== location.host) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }

    nav.appendChild(a);
  }

  // Assemble the navigation structure
  navWrapper.appendChild(toggle);
  navWrapper.appendChild(nav);
  document.body.prepend(navWrapper);

  // MOBILE NAV
  function updateIcon() {
    if (toggle) {
      toggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
    }
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('active');
      updateIcon();
    });

    // Close menu when clicking on a link
    document.querySelectorAll('#main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        updateIcon();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('active');
        updateIcon();
      }
    });
  }

  // DARK MODE - Initialize the toggle
  addDarkModeSwitcher();
});

function addDarkModeSwitcher() {
  console.log('Initializing dark mode switcher');
  
  // Create the toggle element
  const toggleHTML = `
    <div class="theme-switcher">
      <label class="switch">
        <input type="checkbox" id="theme-toggle">
        <span class="slider"></span>
      </label>
      <span class="theme-label">Dark Mode</span>
    </div>`;
  
  document.body.insertAdjacentHTML('afterbegin', toggleHTML);

  const toggle = document.querySelector('#theme-toggle');
  const label = document.querySelector('.theme-label');

  if (!toggle || !label) {
    console.error('Theme toggle elements not found');
    return;
  }

  // Load saved preference
  if ('colorScheme' in localStorage) {
    const savedScheme = localStorage.colorScheme;
    if (savedScheme === 'dark') {
      toggle.checked = true;
      label.textContent = 'Dark Mode';
    } else if (savedScheme === 'light') {
      toggle.checked = false;
      label.textContent = 'Light Mode';
    } else {
      // Auto mode
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      toggle.checked = isDark;
      label.textContent = isDark ? 'Dark Mode' : 'Light Mode';
    }
  } else {
    // Default to auto
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggle.checked = isDark;
    label.textContent = isDark ? 'Dark Mode' : 'Light Mode';
  }

  toggle.addEventListener('change', function () {
    const scheme = this.checked ? 'dark' : 'light';
    applyColorScheme(scheme);
    localStorage.colorScheme = scheme;
    label.textContent = scheme === 'dark' ? 'Dark Mode' : 'Light Mode';

    // Update all external links with current theme
    updateExternalLinks(scheme);
  });

  // Initialize external links with current theme
  const currentScheme = localStorage.colorScheme || 'auto';
  if (currentScheme !== 'auto') {
    updateExternalLinks(currentScheme);
  }

  function applyColorScheme(scheme) {
    const html = document.documentElement;
    if (scheme === 'auto') {
      html.removeAttribute('color-scheme');
      html.style.removeProperty('color-scheme');
    } else {
      html.setAttribute('color-scheme', scheme);
      html.style.setProperty('color-scheme', scheme);
    }
  }

  function updateExternalLinks(theme) {
    // Update all external project links with theme parameter
    document.querySelectorAll('a[href*="github.io"]').forEach(link => {
      if (link.hostname !== window.location.hostname) {
        const url = new URL(link.href);
        url.searchParams.set('theme', theme);
        link.href = url.toString();
      }
    });
  }
}