import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

const Button = ({text, onPress, loading, icon, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="black" />
      ) : (
        <View style={styles[theme].btnContainer}>
          <Icon name={icon} color="black" size={18} />
          <Text style={styles[theme].title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
