import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ThemeColors } from '../theme/colors';
import { Grid3x3, Play, Search } from 'lucide-react-native';
import SearchSvg from '../assets/svgs/Search';
import GridSvg from '../assets/svgs/Grid';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <View style={styles.logoIcon}>
          <Play
            size={20}
            color={ThemeColors.accent.pink}
            fill={ThemeColors.accent.pink}
          />
        </View>
        <Text style={styles.logoText}>Vidoo</Text>
        <View style={styles.proBadge}>
          <Text style={styles.proText}>PRO</Text>
        </View>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}>
           <SearchSvg height={24} width={24}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          {/* <Grid3x3 size={24} color={ThemeColors.text.dark.primary} /> */}

          <GridSvg height={30} width={30}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: `${ThemeColors.accent.pink}20`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: ThemeColors.text.dark.primary,
  },
  proBadge: {
    backgroundColor: ThemeColors.accent.pink,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  proText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 4,
    alignItems:'center',
    justifyContent:'center'
  },
});
