export default interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  file_path: string;
  backdrops: { file_path: string }[];
}
