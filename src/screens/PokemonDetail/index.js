import React, { useContext, useState, useEffect, useCallback } from 'react';
import { LinearProgress } from '@rneui/themed';
import { View, Text, ScrollView, Image, RefreshControl } from 'react-native';
import { Chip, MD2Colors } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';
import pokemonTypeColor from '../../constants/pokemonTypeColor';
import { PokemonContext } from '../../context/PokemonProvider';
import {
  dm2cmConverter,
  hex2rgba,
  hg2kgConverter,
} from '../../utils/unitConverter';

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
      <View style={styles.content}>
        <Text style={styles.contentTitle}>About</Text>
        <View style={styles.contentDecription}>
          <Text style={styles.attributeKey}>Species</Text>
          <Text style={styles.attributeValue}>{pokemon?.species}</Text>
        </View>
        <View style={styles.contentDecription}>
          <Text style={styles.attributeKey}>Abilities</Text>
          <Text style={styles.attributeValue}>
            {pokemon?.abilities.toString()}
          </Text>
        </View>
        <View style={styles.contentDecription}>
          <Text style={styles.attributeKey}>Height</Text>
          <Text style={styles.attributeValue}>
            {dm2cmConverter(pokemon?.height)}
          </Text>
        </View>
        <View style={styles.contentDecription}>
          <Text style={styles.attributeKey}>Weight</Text>
          <Text style={styles.attributeValue}>
            {hg2kgConverter(pokemon?.weight)}
          </Text>
        </View>
        <Text style={styles.contentTitle}>Base Stats</Text>
        <View style={styles.statsWrapper}>
          <Text style={styles.statsKey}>Stats </Text>
          <Text style={styles.statsValue}>46</Text>
          <LinearProgress
            value={0.5}
            color={MD2Colors.red900}
            style={{ width: '50%' }}
          />
        </View>
        <View style={styles.statsWrapper}>
          <Text style={styles.statsKey}>Stats name</Text>
          <Text style={styles.statsValue}>46</Text>
          <LinearProgress
            value={0.5}
            color={MD2Colors.red900}
            style={{ width: '50%' }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetail;
