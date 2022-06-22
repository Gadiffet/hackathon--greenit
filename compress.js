const fs = require('fs');
const compress = require('brotli/compress');

const brotliSettings = {
  extension: 'br',
  skipLarger: true,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11,
  lgwin: 12 // default
};

fs.readdirSync('dist/').forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
    const result = compress(fs.readFileSync('dist/' + file), brotliSettings);
    fs.writeFileSync('public/' + file + '.br', result);
  }
});