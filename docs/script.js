try { navigator.mediaSession?.setActionHandler('enterpictureinpicture', null); } catch (e) { }

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('main-nav');
  const toggle = document.querySelector('.menu-toggle');

  function updateIcon() {
    toggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
  }

  toggle.addEventListener('click', function(e) {
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
  document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      nav.classList.remove('active');
      updateIcon();
    }
  });
});
