import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  appName: {
    color: MD2Colors.black,
    fontFamily: 'Lato-Black',
    fontSize: 24,
    marginBottom: 8,
    marginTop: 24,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 12,
  },
  searchBar: {
    backgroundColor: MD2Colors.grey300,
    marginVertical: 16,
  },
  searchBarInput: {
    color: MD2Colors.black,
  },
});

export default styles;
