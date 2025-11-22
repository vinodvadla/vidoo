import { PermissionsAndroid, Platform } from 'react-native';
import { Linking } from 'react-native';

export async function requestStoragePermission() {
  try {
    if (Platform.OS !== 'android') return true;

    // Android 13+ media permissions
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
    ]);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
