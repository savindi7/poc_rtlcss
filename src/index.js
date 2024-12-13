const isRTL = true; // Example condition
const stylesheetPath = isRTL 
    ? '../dist/assets/theme.rtl.min.css' 
    : '../dist/assets/theme.min.css';

document.getElementById('theme-stylesheet').setAttribute('href', stylesheetPath);
