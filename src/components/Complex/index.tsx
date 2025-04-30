import React from 'react';
import {FlatList} from 'react-native';

interface ComplexListProps {
  data: any[];
  renderItem: ({item}: {item: any}) => JSX.Element;
}

const ComplexList = ({data, renderItem}: ComplexListProps) => {
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
