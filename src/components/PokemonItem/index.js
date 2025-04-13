import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';
import styles from './styles';
import pokemonTypeColor from '../../constants/pokemonTypeColor';
import {
  dm2cmConverter,
  hg2kgConverter,
  hex2rgba,
} from '../../utils/unitConverter';

const PokemonItem = ({ item }) => {
  const { name, height, weight, types, sprite } = item;
  const pokemonColor = pokemonTypeColor[types[0]];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {}}
      style={{ ...styles.item, backgroundColor: hex2rgba(pokemonColor) }}>
      <View style={styles.attributeWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.attributeKey}>
          Height:{' '}
          <Text style={styles.attributeValue}>{dm2cmConverter(height)} cm</Text>
        </Text>
        <Text style={styles.attributeKey}>
          Weight:{' '}
          <Text style={styles.attributeValue}>{hg2kgConverter(weight)} kg</Text>
        </Text>
        <View style={styles.typeWrapper}>
          {types.map((type, index) => (
            <Chip
              key={index}
              style={{
                ...styles.type,
                backgroundColor: pokemonColor,
              }}
              textStyle={styles.typeText}>
              {type}
            </Chip>
          ))}
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: sprite }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonItem;
