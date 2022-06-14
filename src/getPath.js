import { fileURLToPath } from 'url'
import { join, dirname } from 'path';

export const getPath = (url, innerPath = '') => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const path = join(__dirname, innerPath);
  return path;
}
