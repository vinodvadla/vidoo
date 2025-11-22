import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeColors } from '../theme/colors';

type Props = {
  title: string;
};

const GoBackHeader = ({ title }: Props) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container]}>
      <Pressable onPress={goBack}>
        <ArrowLeft size={28} color={'#ffff'} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <MoreHorizontal size={28} color={'#ffff'} />
      </Pressable>
    </View>
  );
};

export default GoBackHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title:{
    fontSize: 18,
    fontWeight: '800',
    color: ThemeColors.text.dark.primary,
    marginBottom: 4,
  }
});
