import React from 'react';
import {sampleDatas} from '@/constants/data/listDt';
import ComplexList from '@/components/Complex/index';
import ListItem from '@/components/ListItem/index';

export default (): JSX.Element => {
  return (
    <ComplexList
      data={sampleDatas}
      renderItem={({item}: any) => <ListItem item={item} />}
    />
  );
};
