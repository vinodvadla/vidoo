import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { ThemeColors } from '../theme/colors';
import { Heart, House, Play, UserRound } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useRef } from 'react';

const icons: any = {
  Home: House,
  Favorites: Heart,
  Videos: Play,
  Profile: UserRound,
};

const { width: screenWidth } = Dimensions.get('window');
const TAB_WIDTH = (screenWidth - 40) / 4; // Calculate individual tab width

export default function MyTabBar({ state, descriptors, navigation }: any) {
  const { buildHref } = useLinkBuilder();
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: state.index * TAB_WIDTH,
      useNativeDriver: true,
      tension: 68,
      friction: 12,
    }).start();
  }, [state.index]);

  return (
    <View style={styles.tabContainer}>
      {/* Animated sliding round indicator */}
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <LinearGradient
          colors={ThemeColors.gradients.primary}
          style={styles.indicatorGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Animated.View>

      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        let Icon = icons[route.name];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButtonWrapper}
          >
            <View style={styles.tabButton}>
              <Icon
                color={isFocused ? '#FFFFFF' : ThemeColors.icon.dark}
                size={24}
              />
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ThemeColors.background.dark,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingHorizontal: 20,
    position: 'relative',
  },

  indicator: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 40,
    borderRadius: 25,
    overflow: 'hidden',
  },

  indicatorGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  tabButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  tabButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
