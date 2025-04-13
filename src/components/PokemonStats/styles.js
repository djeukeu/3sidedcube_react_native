import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  bar: {
    width: '50%',
  },
  statsKey: {
    color: MD2Colors.grey600,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  statsValue: {
    color: MD2Colors.black,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    marginLeft: 'auto',
    marginRight: 16,
  },
  statsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
});

export default styles;
