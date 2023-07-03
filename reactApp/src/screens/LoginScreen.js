import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
//import Input, { KeyBoardTypes, ReturnKeyTypes } from '../components/Input';

const LoginScreen = ({ navigation }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [errortext, setErrortext] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleSubmitPress = () => {
    setErrortext('');
    if (!id) {
      Alert.alert('아이디를 입력해주세요');
      return;
    }
    if (!pw) {
      Alert.alert('비밀번호를 입력해주세요');
      return;
    }
    let dataToSend = { userid: id, userpw: pw };
    let formBody = [];
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <SafeAreaView style={styles.loginContainer}>
        <TextInput style={styles.inputTop} placeholder="아이디" />
        <TextInput style={[styles.input]} placeholder="비밀번호" />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    margin: 20,
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
  },
  loginContainer: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  inputTop: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
    marginBottom: 16,
  },
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9F04',
    marginTop: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
});

export default LoginScreen;
