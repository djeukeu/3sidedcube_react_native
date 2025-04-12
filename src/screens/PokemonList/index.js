import React, { useRef } from 'react';
import { Icon } from '@rneui/themed';
import { View, Text, TouchableOpacity } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import PokemonItem from '../../components/PokemonItem';

const PokemonList = () => {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchRef = useRef(null);

  return (
    <View
      style={{
        ...styles.screen,
        // add bottom and top padding to render content within the safe area boundaries.
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <TouchableOpacity
        style={styles.searchButton}
        activeOpacity={0.73}
        onPress={() => {}}>
        <Icon name="search" size={24} color={MD2Colors.black} />
      </TouchableOpacity>
      <Text style={styles.appName}>PokéAPI</Text>
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
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
    </View>
  );
};

export default PokemonList;
