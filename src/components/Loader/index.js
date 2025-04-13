import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './styles';

const Loader = (props) => {
  return (
    <ActivityIndicator
      {...props}
      color={'#ef5350'}
      style={styles.activityIndicator}
    />
  );
};

export default Loader;
