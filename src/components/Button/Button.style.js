import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 30,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.taxiyellow,
    },
    title: {
      ...baseStyles.title,
      color: 'black',
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      borderWidth: 1,
      borderColor: colors.taxiyellow,
      backgroundColor: '#646E78',
    },
    title: {
      ...baseStyles.title,
      color: colors.taxiyellow,
    },
  }),
};
