// Hamburger Menu
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleSubmenu(id, element) {
  const menu = document.getElementById(id);
  const isOpen = menu.style.display === 'block';

  // Close all submenus and reset icons
  document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none');
  document.querySelectorAll('.toggle-icon').forEach(icon => icon.textContent = '+');

  // Open current submenu and change icon to minus
  if (!isOpen) {
    menu.style.display = 'block';
    if (element && element.querySelector('.toggle-icon')) {
      element.querySelector('.toggle-icon').textContent = '−';
    }
  }
}
