import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
  const pokemonColor = pokemonTypeColor[item.types[0]];
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('PokemonDetail', { id: item.id, name: item.name });
      }}
      style={{ ...styles.item, backgroundColor: hex2rgba(pokemonColor) }}>
      <View style={styles.attributeWrapper}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.attributeKey}>
          Height:{' '}
          <Text style={styles.attributeValue}>
            {dm2cmConverter(item.height)} cm
          </Text>
        </Text>
        <Text style={styles.attributeKey}>
          Weight:{' '}
          <Text style={styles.attributeValue}>
            {hg2kgConverter(item.weight)} kg
          </Text>
        </Text>
        <View style={styles.typeWrapper}>
          {item.types.map((type, index) => (
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
        <Image source={{ uri: item.sprite }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonItem;
