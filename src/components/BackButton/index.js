import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { Text, TouchableOpacity, Platform } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import styles from './styles';
import appName from '../../constants/appName';

const BackButton = ({ buttonColor = MD2Colors.white }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.backButton}>
      <Icon
        name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
        size={24}
        color={buttonColor}
      />
      <Text style={{ ...styles.backButtonText, color: buttonColor }}>
        {appName}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
