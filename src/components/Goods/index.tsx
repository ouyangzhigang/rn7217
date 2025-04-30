import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {mockDatas} from '@/constants/data/listDt';

interface ListItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    status: string;
    statusColor: string;
    rating: number;
    price: string;
    collectionColor: string;
    collectionText: string;
    tags: Array<{text: string; color: string}>;
  };
  index: number;
  onPress: (item: any) => void;
}

const ListItem = ({item, onPress, index}: ListItemProps) => (
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => onPress(item)}
    key={index + item.id}
    activeOpacity={0.8}
    testID={`list-item-${item.id}`}
    accessibilityLabel={`list-item-${item.id}`}>
    {/* 图片区块 */}
    <Image source={{uri: item.image}} style={styles.itemMedia} />
    {/* 操作按钮 */}
    <View style={styles.collectionBox}>
      <Image
        source={require('../../assets/imgs/1689818853713457.png')}
        style={styles.collectionIcon}
      />
      <Text
        style={{...styles.collectionText, ...{color: item.collectionColor}}}>
        {item.collectionText},{index + 1}
      </Text>
    </View>
    {/* 内容主体 */}
    <View style={styles.itemContent}>
      {/* 标题行 */}
      <View style={styles.headerRow}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={[styles.statusTag, {backgroundColor: item.statusColor}]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      {/* 描述内容 */}
      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>

      {/* 元信息行 */}
      <View style={styles.metaRow}>
        <View style={styles.ratingBox}>
          <Image
            source={require('../../assets/imgs/like.jpeg')}
            style={styles.starIcon}
          />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      {/* 标签云 */}
      <View style={styles.tagCloud}>
        {item.tags.map((tag: Record<string, any>, index: number) => (
          <View key={index} style={[styles.tagItem, {borderColor: tag.color}]}>
            <Text style={[styles.tagText, {color: tag.color}]}>{tag.text}</Text>
          </View>
        ))}
      </View>
    </View>

    {/* 操作按钮 */}
    <View style={styles.actionBox}>
      <Image
        source={require('../../assets/imgs/like.jpeg')}
        style={styles.actionIcon}
      />
    </View>
  </TouchableOpacity>
);

const ComplexList = () => {
  const handleItemPress = (item: any) => {
    console.log('Item pressed:', item);
  };

  return (
    <FlatList
      data={mockDatas}
      renderItem={({item, index}) => (
        <ListItem
          item={item as unknown as ListItemProps['item']}
          index={index}
          key={item.id + index}
          onPress={handleItemPress}
        />
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#F5F5F5',
    padding: 12,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  itemMedia: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    flexShrink: 1,
    marginRight: 6,
  },
  statusTag: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 2,
  },
  statusText: {
    color: 'white',
    fontSize: 11,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
    lineHeight: 17,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    color: '#FF9500',
  },
  price: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '700',
  },
  tagCloud: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagItem: {
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 11,
  },
  actionBox: {
    width: 33,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionIcon: {
    width: 18,
    height: 18,
  },
  collectionBox: {
    position: 'absolute',
    bottom: 12,
    left: 12,
  },
  collectionIcon: {
    position: 'absolute',
    bottom: 0,
    width: 18,
    height: 18,
    marginBottom: 4,
  },
  collectionText: {
    position: 'absolute',
    bottom: 4,
    left: 20,
    fontSize: 12,
    color: '#FF3B30',
    textAlign: 'center',
  },
});

export default ComplexList;
