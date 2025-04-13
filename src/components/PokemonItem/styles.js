import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  attributeKey: {
    color: MD2Colors.grey200,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  attributeValue: {
    color: MD2Colors.white,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  attributeWrapper: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageWrapper: {
    height: 150,
    marginLeft: 'auto',
    width: 150,
  },
  item: {
    borderRadius: 13,
    flexDirection: 'row',
    marginVertical: 4,
  },
  name: {
    color: MD2Colors.white,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default styles;
