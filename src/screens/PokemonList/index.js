import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from 'react';
import _ from 'lodash';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import Loading from '../../components/Loading';
import PokemonItem from '../../components/PokemonItem';
import appName from '../../constants/appname';
import { PokemonContext } from '../../context/PokemonProvider';

const PokemonList = () => {
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const pokemonCtx = useContext(PokemonContext);
  const pokemons = pokemonCtx.pokemons;

  // Filter Pokémon data list based on search query
  const pokemonDataList = _.filter(pokemons, (pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    pokemonCtx.getPokemonList().then(() => {
      setRefreshing(false);
    });
  }, [pokemonCtx]);

  useEffect(() => {
    setLoading(true);
    pokemonCtx.getPokemonList(offset).then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMore = async () => {
    const nextOffset = offset + 1;
    setMoreLoading(true);
    pokemonCtx.getPokemonList(nextOffset).then(() => {
      setMoreLoading(false);
      setOffset(nextOffset);
    });
  };

  return (
    <View
      style={{
        ...styles.screen,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <Text style={styles.appName}>{appName}</Text>
      <Searchbar
        ref={searchRef}
        placeholder="Search pokemon"
        onChangeText={setSearchQuery}
        value={searchQuery}
        iconColor={MD2Colors.black}
        placeholderTextColor={MD2Colors.grey700}
        selectionColor={MD2Colors.black}
        inputStyle={styles.searchBarInput}
        style={styles.searchBar}
        onClearIconPress={() => {
          searchRef.current.clear();
        }}
      />
      {loading ? (
        <Loading size="large" />
      ) : (
        <FlatList
          data={pokemonDataList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PokemonItem item={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={fetchMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={moreLoading ? <Loading size="small" /> : null}
        />
      )}
    </View>
  );
};

export default PokemonList;
