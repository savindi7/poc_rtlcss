// src/index.js
import './assets/theme.min.css'; // Import the LTR CSS
import './assets/theme.rtl.min.css'; // Import the RTL CSS

window.onload = function () {
    // For example, check the browser's language setting
    const isRTL = true

    // If language is Arabic or other RTL language, apply RTL stylesheet
    if (isRTL) {
        document.getElementById('theme-stylesheet').setAttribute('href', 'assets/theme.rtl.min.css');
    } else {
        // Keep LTR stylesheet if language is not Arabic
        document.getElementById('theme-stylesheet').setAttribute('href', 'assets/theme.min.css');
    }
};