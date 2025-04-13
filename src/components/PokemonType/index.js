import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';
import styles from './styles';

const PokemonType = ({ types = [], bgColor }) => {
  return (
    <View style={styles.typeWrapper}>
      {types.map((type, index) => (
        <Chip
          key={index}
          style={{
            ...styles.type,
            backgroundColor: bgColor,
          }}
          textStyle={styles.typeText}>
          {type}
        </Chip>
      ))}
    </View>
  );
};

export default PokemonType;
