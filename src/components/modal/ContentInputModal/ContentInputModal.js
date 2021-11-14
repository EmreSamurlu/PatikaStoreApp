import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../../Button';
import styles from './ContentInputModal.style';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  const handleSend = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText();
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      swipeDirection="down"
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={'grey'}
            placeholder="Darla hadi milleti..."
            onChangeText={setText}
            multiline
            autoCapitalize="none"
          />
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
