const fs = require('fs');
const path = require('path');
const rtlcss = require('rtlcss');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/, // Rule to process CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.emit.tapAsync('GenerateRTLCSS', (compilation, callback) => {
          const ltrCSSPath = path.resolve(__dirname, 'src/assets/theme.min.css');
          const rtlCSSPath = path.resolve(__dirname, 'dist/assets/theme.rtl.min.css');

          if (fs.existsSync(ltrCSSPath)) {
            const ltrCSS = fs.readFileSync(ltrCSSPath, 'utf-8');
            const rtlCSS = rtlcss.process(ltrCSS);

            // Write both files to the output directory
            const outputDir = path.resolve(__dirname, 'dist/assets');
            if (!fs.existsSync(outputDir)) {
              fs.mkdirSync(outputDir, { recursive: true });
            }

            // Copy LTR CSS
            fs.writeFileSync(path.join(outputDir, 'theme.min.css'), ltrCSS);

            // Write RTL CSS
            fs.writeFileSync(rtlCSSPath, rtlCSS);

            console.log('LTR and RTL CSS files generated successfully!');
          } else {
            console.warn('LTR CSS file not found:', ltrCSSPath);
          }

          callback();
        });
      },
    },
  ],
};
