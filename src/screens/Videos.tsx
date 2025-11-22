import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import GoBackHeader from '../components/GoBackHeader';
import { ThemeColors } from '../theme/colors';
import { MoreVertical, Clock, Play } from 'lucide-react-native';
import { getAllVideosFromDevice } from '../utils/videos';
import RNFS from 'react-native-fs';
type VideoItem = {
  id: number;
  title: string;
  description: string;
  duration: string;
  fileType: string;
  thumbnailColor: string;
};

const Videos = () => {
  const videos: VideoItem[] = [
    {
      id: 1,
      title: 'Dubai the Emirate in the UAE',
      description: 'Dubai videos',
      duration: '03:50',
      fileType: 'MP4',
      thumbnailColor: '#1E3A5F',
    },
    {
      id: 2,
      title: 'Bali -What you need to know',
      description: 'Bali videos',
      duration: '03:50',
      fileType: 'MP4',
      thumbnailColor: '#2D4A3E',
    },
    {
      id: 3,
      title: 'F1 race recent in Dubai',
      description: 'F1 Racing',
      duration: '03:50',
      fileType: 'MKV',
      thumbnailColor: '#3A2D1E',
    },
    {
      id: 4,
      title: 'F1 race recent in Dubai',
      description: 'Bike',
      duration: '03:50',
      fileType: 'MP4',
      thumbnailColor: '#1E2D3A',
    },
    {
      id: 5,
      title: 'YAMAHA Bike Review',
      description: 'Bike',
      duration: '03:50',
      fileType: 'MKV',
      thumbnailColor: '#2D3A1E',
    },
    {
      id: 6,
      title: 'Bali -What you need to know',
      description: 'Bali videos',
      duration: '03:50',
      fileType: 'MP4',
      thumbnailColor: '#3A2D2D',
    },
  ];

  // async function getVideoMetadata(path: string) {
  //   try {
  //     const info: any = await createThumbnail({
  //       url: 'file://' + path,
  //       timeStamp: 1000, // 1 second frame
  //     });
  //     console.log('Video Info', info);

  //     return {
  //       duration: info.duration, // milliseconds
  //       thumbnail: info.path, // thumbnail file path
  //     };
  //   } catch (error) {
  //     console.log('Error extracting metadata:', error);
  //     return null;
  //   }
  // }
  const renderItem = ({ item, index }: { item: VideoItem; index: number }) => (
    <View style={{ paddingHorizontal: 15 }}>
      <TouchableOpacity activeOpacity={0.7} style={styles.videoCard}>
        <View
          style={[styles.thumbnail, { backgroundColor: item.thumbnailColor }]}
        />

        <View style={styles.videoInfoContainer}>
          <View style={styles.videoInfoRow}>
            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle} numberOfLines={2}>
                {item.title}
              </Text>

              <Text style={styles.videoFolderTitle} numberOfLines={1}>
                {item.description}
              </Text>

              <View style={styles.chipsContainer}>
                <View style={styles.chip}>
                  <Clock size={14} color={ThemeColors.text.dark.muted} />
                  <Text style={styles.chipText}>{item.duration}</Text>
                </View>

                <View style={styles.chip}>
                  <Play size={14} color={ThemeColors.text.dark.muted} />
                  <Text style={styles.chipText}>{item.fileType}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity>
              <MoreVertical color={ThemeColors.icon.muted} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {index < videos.length - 1 && <View style={styles.seperator} />}
    </View>
  );

  useEffect(() => {
    async function loadVideos() {
      try {
        const videos = await getAllVideosFromDevice();
        console.log('📽️ Videos Found:', videos.length);
        console.log(videos);
       
      
      } catch (error) {
        console.log('❌ Error fetching videos:', error);
      }
    }

    loadVideos();
  }, []);
  return (
    <View style={styles.container}>
      <GoBackHeader title="Videos" />

      <View style={styles.listContainer}>
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.background.dark,
    paddingHorizontal: 15,
  },
  listContainer: {
    backgroundColor: ThemeColors.cards.dark,
    marginTop: 25,
    borderWidth: 1,
    borderColor: ThemeColors.border.dark,
    borderRadius: 20,
    flex: 1,
  },
  videoCard: {
    width: '100%',
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  thumbnail: {
    width: '35%',
    height: 80,
    borderRadius: 8,
  },
  videoInfoContainer: {
    flex: 1,
  },
  videoInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: ThemeColors.text.dark.primary,
    marginBottom: 4,
  },
  videoFolderTitle: {
    fontSize: 12,
    color: ThemeColors.text.dark.muted,
    marginBottom: 8,
  },
  chipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chip: {
    backgroundColor: ThemeColors.background.dark,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chipText: {
    fontSize: 12,
    color: ThemeColors.text.dark.muted,
    fontWeight: '500',
  },
  seperator: {
    width: '100%',
    height: 3,
    backgroundColor: ThemeColors.background.seperator,
    marginBottom: 8,
    borderRadius: 10,
  },
});
