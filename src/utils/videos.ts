import RNFS from 'react-native-fs';

export interface VideoMeta {
  name: string;
  path: string;
  size: number;
  modified: number | null;
  duration: number | null; // in ms
  width: number | null;
  height: number | null;
  thumbnail: string | null;
}

const VIDEO_EXTENSIONS = ['mp4', 'mkv', 'avi', 'mov', 'webm', 'flv', '3gp'];

function isVideo(name: string) {
  const ext = name.split('.').pop()?.toLowerCase();
  return ext && VIDEO_EXTENSIONS.includes(ext);
}

async function scanDir(path: string, result: any[] = []) {
  try {
    const items = await RNFS.readDir(path);

    for (const item of items) {
      if (item.isFile() && isVideo(item.name)) {
        // const meta = await getVideoMetadata(item.path);
        result.push(item);
      }

      if (item.isDirectory()) {
        await scanDir(item.path, result);
      }
    }
  } catch (e) {
    // skip folders without permission
  }

  return result;
}

export async function getAllVideosFromDevice() {
  const root = RNFS.ExternalStorageDirectoryPath;
  return await scanDir(root);
}
