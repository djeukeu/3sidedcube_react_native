import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  attributeKey: {
    color: MD2Colors.grey600,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  attributeValue: {
    color: MD2Colors.black,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  contentDecription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    maxWidth: '60%',
  },
  contentTitle: {
    color: MD2Colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginBottom: 8,
    marginTop: 16,
  },
  header: {
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
    color: MD2Colors.white,
    fontFamily: 'Lato-Black',
    fontSize: 24,
    marginVertical: 8,
    textTransform: 'capitalize',
  },
  screen: {
    flex: 1,
  },
  statsValue: {
    marginLeft: 'auto',
    marginRight: 16,
  },
  statsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  type: {
    marginRight: 8,
  },
  typeText: {
    color: MD2Colors.white,
    textTransform: 'capitalize',
  },
  typeWrapper: { flexDirection: 'row', marginVertical: 8 },
});

export default styles;
