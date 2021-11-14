import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#EAB464',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowRadius: 10,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.mygrey,
    borderBottomWidth: 1,

    paddingBottom: 5,
  },
  user: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: 'black',
    fontStyle: 'italic',
    opacity: 0.6,
  },
  title: {
    color: 'black',
    fontSize: 16,
    margin: 5,
  },
  footer: {},
  dislikeContainer: {},
  dislikeCountContainer: {},
  dislikeCountText: {},
  dislikeText: {},
});
