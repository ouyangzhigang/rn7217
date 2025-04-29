import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '@/components/ListItem/index';

const ComplexList = ({data}: any) => {
  const renderItem = ({item}: any) => <ListItem item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      initialNumToRender={5}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
};

export default ComplexList;
