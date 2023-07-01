import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return 'http://image.tmdb.org/t/p/w300/' + url;
}

export default getCroppedImageUrl;