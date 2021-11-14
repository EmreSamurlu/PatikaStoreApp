import {StyleSheet, Platform, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: Platform.OS === 'android' ? 5 : 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 3,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    color: 'black',
  },
});
