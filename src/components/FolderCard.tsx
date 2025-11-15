import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ThemeColors } from '../theme/colors';
import { Folder, MoreHorizontal, MoreVertical } from 'lucide-react-native';

type Props = {
  folder: any;
};

const FolderCard = ({ folder }: Props) => {
  return (
    <TouchableOpacity
      key={folder.id}
      style={styles.folderItem}
      activeOpacity={0.7}
    >
      <View style={[styles.folderIconContainer]}>
        <Folder size={32} color={folder.color} fill={folder.color} />
        <View
          style={[styles.seperator,{backgroundColor:'transparent'}]}
        ></View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.folderInfo}>
            <Text style={styles.folderName}>{folder.name}</Text>
            <Text style={styles.folderCount}>{folder.count}</Text>
          </View>
          <TouchableOpacity>
            <MoreHorizontal size={24} color={ThemeColors.text.dark.muted} />
          </TouchableOpacity>
        </View>
        <View
          style={styles.seperator}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

export default FolderCard;

const styles = StyleSheet.create({
  foldersSection: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: ThemeColors.text.dark.muted,
    marginBottom: 16,
  },
  folderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  folderIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  folderInfo: {
    flex: 1,
  },
  folderName: {
    fontSize: 16,
    fontWeight: '600',
    color: ThemeColors.text.dark.primary,
    marginBottom: 4,
  },
  folderCount: {
    fontSize: 12,
    color: ThemeColors.text.dark.muted,
  },
  seperator:{
    width: '100%',
    height: 3,
    backgroundColor:ThemeColors.background.seperator,
    marginTop: 12,
    borderRadius: 10,
  }
});
