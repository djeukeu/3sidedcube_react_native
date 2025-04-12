import React from 'react';
import { View, Text, Image } from 'react-native';
import { Chip } from 'react-native-paper';
import styles from './styles';

const PokemonItem = () => {
  return (
    <View style={styles.item}>
      <View style={styles.attributeWrapper}>
        <Text style={styles.name}>PokemonItem</Text>
        <Text style={styles.attributeKey}>
          Height: <Text style={styles.attributeValue}>2dm</Text>
        </Text>
        <Text style={styles.attributeKey}>
          Weight: <Text style={styles.attributeValue}>2dm</Text>
        </Text>
        <View style={styles.typeWrapper}>
          <Chip style={styles.type} textStyle={styles.typeText}>
            Type 1
          </Chip>
          <Chip style={styles.type} textStyle={styles.typeText}>
            Type 1
          </Chip>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/1.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default PokemonItem;
