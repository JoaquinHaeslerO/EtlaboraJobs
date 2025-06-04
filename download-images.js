import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1553413077-190dd305871c',
    filename: 'warehouse.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    filename: 'forklift.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866',
    filename: 'containers.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
    filename: 'germany-flag.svg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    filename: 'netherlands-flag.svg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, 'public', 'images', filename);
  const file = fs.createWriteStream(filepath);

  https.get(`${url}${filename.endsWith('.jpg') ? '?q=80&w=2070' : ''}`, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath);
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Crear el directorio si no existe
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Descargar todas las imágenes
images.forEach(img => downloadImage(img.url, img.filename)); 