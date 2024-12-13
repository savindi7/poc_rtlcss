const fs = require('fs');
const path = require('path');
const rtlcss = require('rtlcss');

// Define input and output paths
const ltrCSSPath = path.resolve(__dirname, '../css/theme.min.css');
const outputDir = path.resolve(__dirname, '../dist/css');
const rtlCSSPath = path.join(outputDir, 'theme.rtl.min.css');
const ltrOutputPath = path.join(outputDir, 'theme.min.css');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Check if the LTR CSS file exists
if (fs.existsSync(ltrCSSPath)) {
  console.log(`Processing LTR CSS from: ${ltrCSSPath}`);

  // Read the LTR CSS file
  const ltrCSS = fs.readFileSync(ltrCSSPath, 'utf-8');

  // Generate RTL CSS using rtlcss
  const rtlCSS = rtlcss.process(ltrCSS);

  // Write the LTR CSS to the output directory
  fs.writeFileSync(ltrOutputPath, ltrCSS, 'utf-8');
  console.log(`LTR CSS written to: ${ltrOutputPath}`);

  // Write the RTL CSS to the output directory
  fs.writeFileSync(rtlCSSPath, rtlCSS, 'utf-8');
  console.log(`RTL CSS written to: ${rtlCSSPath}`);
} else {
  console.error(`LTR CSS file not found: ${ltrCSSPath}`);
}
