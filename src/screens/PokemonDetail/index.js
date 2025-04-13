import React, { useContext, useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, Image, RefreshControl } from 'react-native';
import { Chip, MD2Colors } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';
import pokemonTypeColor from '../../constants/pokemonTypeColor';
import { PokemonContext } from '../../context/PokemonProvider';
import { hex2rgba } from '../../utils/unitConverter';

const PokemonDetail = (props) => {
  const { id: pokemonId } = props.route.params;
  const insets = useSafeAreaInsets();
  const pokemonCtx = useContext(PokemonContext);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const pokemonColor = pokemonTypeColor[pokemon?.types[0]];

  useEffect(() => {
    setLoading(true);
    pokemonCtx.getPokemonDetail(pokemonId).then((pokemonDetail) => {
      setPokemon(pokemonDetail);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    pokemonCtx.getPokemonDetail(pokemonId).then((pokemonDetail) => {
      setPokemon(pokemonDetail);

      setRefreshing(false);
    });
  }, [pokemonCtx, pokemonId]);

  if (loading) {
    return (
      <View style={{ ...styles.header, paddingTop: insets.top }}>
        <BackButton buttonColor={MD2Colors.black} />
        <Loader size="large" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View
        style={{
          ...styles.header,
          paddingTop: insets.top,
          backgroundColor: hex2rgba(pokemonColor),
        }}>
        <BackButton />
        <Text style={styles.name}>{pokemon?.name}</Text>
        <View style={styles.typeWrapper}>
          {pokemon?.types.map((type, index) => (
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
        <View style={styles.imageWrapper}>
          <Image source={{ uri: pokemon?.sprite }} style={styles.image} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetail;
