const fs = require('fs');
const path = require('path');
const rtlcss = require('rtlcss');

const cssInputPath = path.resolve(__dirname, '../css/theme.min.css');
const cssOutputDir = path.resolve(__dirname, '../dist/css');
const rtlCSSPath = path.join(cssOutputDir, 'theme.rtl.min.css');
const ltrCSSPath = path.join(cssOutputDir, 'theme.min.css');

const htmlInputPath = path.resolve(__dirname, '../index.html');
const htmlOutputPath = path.resolve(__dirname, '../dist/index.html');

if (!fs.existsSync(cssOutputDir)) {
  fs.mkdirSync(cssOutputDir, { recursive: true });
}

if (fs.existsSync(cssInputPath)) {
  console.log(`Processing LTR CSS from: ${cssInputPath}`);

  const ltrCSS = fs.readFileSync(cssInputPath, 'utf-8');
  const rtlCSS = rtlcss.process(ltrCSS);

  fs.writeFileSync(ltrCSSPath, ltrCSS, 'utf-8');
  console.log(`LTR CSS written to: ${ltrCSSPath}`);

  fs.writeFileSync(rtlCSSPath, rtlCSS, 'utf-8');
  console.log(`RTL CSS written to: ${rtlCSSPath}`);
} else {
  console.error(`CSS file not found: ${cssInputPath}`);
}

if (fs.existsSync(htmlInputPath)) {
  fs.copyFileSync(htmlInputPath, htmlOutputPath);
  console.log(`HTML file copied to: ${htmlOutputPath}`);
} else {
  console.error(`HTML file not found: ${htmlInputPath}`);
}
