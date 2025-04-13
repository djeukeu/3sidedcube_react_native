import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    marginVertical: 16,
  },
  backButtonText: {
    color: MD2Colors.white,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    marginLeft: 6,
  },
  header: {
    backgroundColor: 'yellow',
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  image: {
    height: '100%',
    width: 200,
  },
  imageWrapper: {
    alignItems: 'center',
    height: 200,
    width: '100%',
  },
  name: {
    fontFamily: 'Lato-Black',
    fontSize: 24,
    marginVertical: 8,
  },
  screen: {
    flex: 1,
  },
  type: {
    marginRight: 8,
  },
  typeText: {
    color: MD2Colors.white,
  },
  typeWrapper: { flexDirection: 'row', marginVertical: 8 },
});

export default styles;
