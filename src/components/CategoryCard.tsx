import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { ElementType } from 'react';
import { ThemeColors } from '../theme/colors';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;
type Props = {
  category: {
    icon: ElementType;
    id: number | string;
    title: string;
    count: number | string;
  };
};

const CategoryCard = ({ category }: Props) => {
  const IconComponent = category.icon;

  return (
    <TouchableOpacity
      key={category.id}
      style={styles.categoryCard}
      activeOpacity={0.9}
    >
      <IconComponent height={28} width={28} />
      <View>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <Text style={styles.categoryCount}>{category.count}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    width: CARD_WIDTH,
    backgroundColor: ThemeColors.cards.dark,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: ThemeColors.border.dark,
    gap: 10,
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
});
