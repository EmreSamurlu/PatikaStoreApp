import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utility/authErrorMessageParser';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Sign.style';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.goBack();
  };
  const handleFormSubmit = async formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler Eşleşmedi',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
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
            <Input
              value={values.repassword}
              onType={handleChange('repassword')}
              placeholder="şifrenizi tekrar giriniz"
              isSecure
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Giriş Yap" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default Sign;
