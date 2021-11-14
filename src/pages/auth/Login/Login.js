import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Login.style';
import authErrorMessageParser from '../../../utility/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    navigation.navigate('SignPage');
  };
  const handleFormSubmit = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );

      navigation.navigate('MessagesPage');
    } catch (err) {
      showMessage({
        message: authErrorMessageParser(err.code),
        type: 'danger',
      });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="e-postanızı giriniz"
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="şifrenizi giriniz"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignup} />
    </SafeAreaView>
  );
};

export default Login;
