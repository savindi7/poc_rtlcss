const isRTL = true; // Example condition
const stylesheetPath = isRTL 
    ? 'css/theme.rtl.min.css' 
    : 'css/theme.min.css';

document.getElementById('theme-stylesheet').setAttribute('href', stylesheetPath);
