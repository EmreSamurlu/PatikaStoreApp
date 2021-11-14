import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mygrey,
  },
  logo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
  header: {
    color: colors.taxiyellow,
    margin: 5,
    fontSize: 160,
  },
});
