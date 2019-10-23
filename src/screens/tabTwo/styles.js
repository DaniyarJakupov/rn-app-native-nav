import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainerStyle: {
    width: '100%',
    height: '100%',
  },
  item: {
    height: height * 0.5,
    justifyContent: 'center',
  },
  itemWrapper: {
    marginHorizontal: 10,
  },
  border: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  card: {
    height: height * 0.5,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
});
