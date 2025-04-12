import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  appName: {
    color: MD2Colors.black,
    fontFamily: 'Lato-Black',
    fontSize: 24,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 12,
  },
  searchButton: {
    marginLeft: 'auto',
    marginRight: 16,
    marginVertical: 16,
  },
});

export default styles;
