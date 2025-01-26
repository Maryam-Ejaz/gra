import fs from 'fs';
import path from 'path';

export async function GET() {
  const galleryPath = path.join(process.cwd(), 'public/images/gallery');
  const imageFiles = fs.readdirSync(galleryPath);

  const images = imageFiles.map((file, index) => ({
    id: index + 1,
    url: `/images/gallery/${file}`,
    title: `GRA Event Image ${index + 1}`,
  }));

  return new Response(JSON.stringify(images));
}
