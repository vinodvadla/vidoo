import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  //   Clock,
  Heart,
  Music,
  Video as VideoIcon,
  Folder,
  MoreVertical,
} from 'lucide-react-native';
import { ThemeColors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import ClockSvg from '../assets/svgs/Clock';
import HeartSvg from '../assets/svgs/Heart';
import MusicSvg from '../assets/svgs/Music';
import VideoSvg from '../assets/svgs/Video';
import FolderCard from '../components/FolderCard';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

type Props = {};

const Home = (props: Props) => {
  const categories = [
    {
      id: 1,
      icon: ClockSvg,
      title: 'Recent',
      count: '12 Files',
      color: ThemeColors.accent.pink,
    },
    {
      id: 2,
      icon: HeartSvg,
      title: 'Favorite',
      count: '30 Files',
      color: ThemeColors.accent.yellow,
    },
    {
      id: 3,
      icon: MusicSvg,
      title: 'Audio',
      count: '120 Files',
      color: ThemeColors.accent.blue,
    },
    {
      id: 4,
      icon: VideoSvg,
      title: 'Video',
      count: '80 Files',
      color: ThemeColors.accent.orange,
    },
  ];

  const folders = [
    {
      id: 1,
      name: 'Camera',
      count: '80 Files',
      color: ThemeColors.accent.orange,
    },
    {
      id: 2,
      name: 'Download',
      count: '20 Files',
      color: ThemeColors.accent.yellow,
    },
    {
      id: 3,
      name: 'Facebook',
      count: '10 Files',
      color: ThemeColors.accent.blue,
    },
    {
      id: 4,
      name: 'Camtasia',
      count: '60 Files',
      color: ThemeColors.accent.green,
    },
    { id: 5, name: 'Inshot', count: '15 Files', color: ThemeColors.icon.muted },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => {
            return <CategoryCard category={category} key={index} />;
          })}
        </View>

        <View style={styles.foldersSection}>
          <Text style={styles.sectionTitle}>Frequently Used</Text>
          <View
            style={styles.foldersInnerSection}
          >
            {folders.map((folder, index) => (
              <FolderCard folder={folder} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.background.dark,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 24,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginBottom: 32,
    justifyContent: 'space-between',
    gap: 15,
  },
  categoryCard: {
    width: CARD_WIDTH,
    backgroundColor: ThemeColors.cards.dark,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ThemeColors.border.dark,
  },
  categoryIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: ThemeColors.text.dark.primary,
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: ThemeColors.text.dark.muted,
  },
  foldersSection: {
    paddingHorizontal: 15,
  },
  foldersInnerSection:{
    backgroundColor: ThemeColors.cards.dark,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: ThemeColors.border.dark,
    paddingTop:15
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: ThemeColors.text.dark.muted,
    marginBottom: 16,
  },
});

export default Home;
