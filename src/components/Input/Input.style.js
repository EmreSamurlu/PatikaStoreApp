import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'android' ? 0 : 15,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: '#8D98A7',
    borderRadius: 5,
    flexDirection: 'row',
    fontSize: 16,
  },
  input: {
    flex: 1,
  },
});
