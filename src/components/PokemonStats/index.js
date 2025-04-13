import React from 'react';
import { LinearProgress } from '@rneui/themed';
import { View, Text } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import styles from './styles';

const PokemonStats = ({ item }) => {
  const barColor = item.value >= 50 ? MD2Colors.green700 : MD2Colors.red700;
  const barValue = item.value / 100;

  return (
    <View style={styles.statsWrapper}>
      <Text style={styles.statsKey}>{item.name}</Text>
      <Text style={styles.statsValue}>{item.value}</Text>
      <LinearProgress value={barValue} color={barColor} style={styles.bar} />
    </View>
  );
};

export default PokemonStats;
