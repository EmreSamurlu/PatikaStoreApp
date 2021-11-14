import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

import styles from './MessageCard.style';

const MessageCard = ({message, onBanane}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.title}>{message.text}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.dislikeContainer} onPress={onBanane}>
          {!!message.dislike && (
            <View style={styles.dislikeCountContainer}>
              <Text style={styles.dislikeCountText}>{message.dislike}</Text>
            </View>
          )}
          <Text style={styles.dislikeText}>bana ne?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageCard;
