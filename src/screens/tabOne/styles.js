import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainerStyle: {
    width: '100%',
    height: '100%',
  },
  item: {
    height: 50,
    justifyContent: 'center',
  },
  itemWrapper: {
    marginHorizontal: 10,
  },
  border: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
