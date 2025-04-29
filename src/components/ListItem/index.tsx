import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {styles, colors} from '@/components/ListItem/style';

interface TagProps {
  label: string;
  type: string;
}

const getTagStyle = (type: string) => {
  const typeColors: Record<string, {bg: string; text: string}> = {
    技术: {bg: '#d6e4ff', text: '#2c52d1'},
    设计: {bg: '#ffe7d6', text: '#d1612c'},
    编程: {bg: '#d6f5e3', text: '#2d9c5f'},
    科技: {bg: '#1fd6ff', text: '#8b008b'},
    默认: {bg: colors.background, text: colors.primary},
  };

  return {
    backgroundColor: typeColors[type]?.bg || typeColors.默认.bg,
    color: typeColors[type]?.text || typeColors.默认.text,
  };
};

const Tag: React.FC<TagProps> = ({label, type}) => {
  return (
    <View style={[styles.tag, getTagStyle(type)]}>
      <Text style={{color: getTagStyle(type).color, fontSize: 13}}>{label}</Text>
    </View>
  );
};

const ListHeader = ({date, type}: any) => (
  <View style={styles.header}>
    <Text style={styles.dateText}>{date}</Text>
    {/* <View style={[styles.typeBadge, {backgroundColor: colors.accent}]}> */}
    <View
      style={[
        styles.typeBadge,
        {backgroundColor: getTagStyle(type).backgroundColor},
      ]}>
      <Text style={{color: getTagStyle(type).color, fontSize: 13}}>{type}</Text>
    </View>
  </View>
);

const ListFooter = ({stats}: any) => (
  <View style={styles.footer}>
    <View style={styles.statContainer}>
      <TouchableOpacity style={styles.statItem}>
        <Image
          source={require('@/assets/imgs/like.jpeg')}
          style={styles.icon}
        />
        <Text style={{color: colors.secondary}}>{stats.likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.statItem}>
        <Image
          source={require('@/assets/imgs/share.jpeg')}
          style={styles.icon}
        />
        <Text style={{color: colors.secondary}}>{stats.shares}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ListItem = ({item}: {item: any}) => (
  <View style={styles.container}>
    <ListHeader date={item.date} label={item.label} type={item.type} />

    <Image
      source={{uri: item.imageUrl}}
      style={styles.image}
      resizeMode="cover"
    />

    <View style={styles.contentContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <FlatList
        horizontal
        data={item.tags}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item: tag}) => <Tag label={tag} type={tag} />}
        contentContainerStyle={styles.tagContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>

    <ListFooter stats={item.stats} />
  </View>
);

export default React.memo(ListItem);
