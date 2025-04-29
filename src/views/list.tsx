import React from 'react';
import {sampleData} from '@/constants/data/listDt';
import ComplexList from '@/components/Complex/index';

export default (): JSX.Element => {
  return <ComplexList data={sampleData} />;
};
