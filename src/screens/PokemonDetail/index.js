import React from 'react';
import { Icon } from '@rneui/base';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { Chip, MD2Colors } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import appName from '../../constants/appname';

const PokemonDetail = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.screen}>
      <View
        style={{
          ...styles.header,
          paddingTop: insets.top,
        }}>
        <TouchableOpacity onPress={() => {}} style={styles.backButton}>
          <Icon
            name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
            size={24}
            color={MD2Colors.white}
          />
          <Text style={styles.backButtonText}>{appName}</Text>
        </TouchableOpacity>
        <Text style={styles.name}>Pokemon Name</Text>
        <View style={styles.typeWrapper}>
          <Chip
            style={{
              ...styles.type,
              backgroundColor: 'green',
            }}
            textStyle={styles.typeText}>
            {'type'}
          </Chip>
          <Chip
            style={{
              ...styles.type,
              backgroundColor: 'green',
            }}
            textStyle={styles.typeText}>
            {'type'}
          </Chip>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/1.png')}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetail;
