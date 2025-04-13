import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  type: {
    marginRight: 8,
  },
  typeText: {
    color: MD2Colors.white,
    textTransform: 'capitalize',
  },
  typeWrapper: { flexDirection: 'row' },
});

export default styles;
