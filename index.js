document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('rtl-checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          document.documentElement.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.removeAttribute('dir');
        }
      });
    }
  });
  