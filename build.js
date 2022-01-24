var fs = require( 'fs' );

const files = [
  'favicon.ico',
  'manifest.json',
  'sw.js',
  'robots.txt',
  'images/avatar.webp',
  'images/logo.webp',
  'images/yeeeeeehawwwwwwmf.webp',
  'images/offline.webp',
  'images/maskable_icon.png',
  'css/paper-ripple.min.css',
  'js/paper-ripple.min.js',
  'js/analytics.js',
  'js/page.min.js',
  'fonts/roboto-v15-latin-regular.woff2',
  'fonts/roboto-v15-latin-regular.woff',
  'fonts/roboto-v15-latin-regular.ttf',
  'fonts/roboto-v15-latin-regular.svg',
  'fonts/roboto-v15-latin-regular.eot',
  'fonts/halflife2.ttf',
  'fonts/hl2mp.ttf',
  'fonts/csd.ttf',
  '404.html',
  '500.html'
];


function copyFile(filePath) {
  fs.createReadStream(`./src/${filePath}`).pipe(fs.createWriteStream(`./html/${filePath}`));
}

function makeFolders() {
  var imgFolder = './html/images';
  var cssFolder = './html/css';
  var fontFolder ='./html/fonts';
  var jsFolder = './html/js';

  if (!fs.existsSync(imgFolder)){
    fs.mkdirSync(imgFolder);
  }
  if (!fs.existsSync(cssFolder)){
    fs.mkdirSync(cssFolder);
  }
  if (!fs.existsSync(fontFolder)){
    fs.mkdirSync(fontFolder);
  }
  if (!fs.existsSync(jsFolder)){
    fs.mkdirSync(jsFolder);
  }
}


makeFolders();
files.forEach(copyFile);

