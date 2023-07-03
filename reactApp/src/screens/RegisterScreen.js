import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
//import axios from 'axios';
//import { bool } from 'prop-types';

const RegisterScreen = () => {
  //입력상태
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [checked, setChecked] = useState('');
  const [birth, setBirth] = useState('');
  const handleDateChange = (date) => {
    setBirth(date);
  };

  //오류메시지 상태저장
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [pwMessage, setPwMessage] = useState('');

  //유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  //닉네임
  const onChangeNickname = (textNickname) => {
    setNickname(textNickname);
    if (textNickname.length < 2 || textNickname.length > 5) {
      setNicknameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
      setIsNickname(false);
    } else {
      setNicknameMessage('올바른 형식입니다.');
      setIsNickname(true);
    }
  };

  //이메일
  const onChangeEmail = (textEmail) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(textEmail);
    if (!emailRegex.test(textEmail)) {
      setEmailMessage('이메일 형식이 올바르지 않습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식입니다.');
      setIsEmail(true);
    }
  };

  //아이디
  const onChangeId = (textId) => {
    const idRegex = /^[A-Za-z0-9]{5,7}$/;
    setId(textId);
    if (!idRegex.test(textId)) {
      setIdMessage('영어+숫자 조합으로 5글자 이상 7글자 이하로 입력해주세요');
      setIsId(false);
    } else {
      setIdMessage('올바른 형식입니다.');
      setIsId(true);
    }
  };
  //비밀번호
  const onChangePw = (textPw) => {
    const pwRegex = /^[A-Za-z0-9]{8,12}$/;
    setPw(textPw);
    if (!pwRegex.test(textPw)) {
      setPwMessage('영어+숫자 조합으로 8글자 이상 12글자 이하로 입력해주세요');
      setIsPw(false);
    } else {
      setPwMessage('올바른 형식입니다.');
      setIsPw(true);
    }
  };

  const handleSubmitButton = async () => {
    if (!nickname) {
      Alert.alert('닉네임을 입력해주세요');
      return;
    }
    if (isNickname == false) {
      Alert.alert('닉네임을 확인해주세요');
      return;
    }
    if (!email) {
      Alert.alert('이메일을 입력해주세요');
      return;
    }
    if (isEmail == false) {
      Alert.alert('이메일을 확인해주세요');
      return;
    }
    if (!id) {
      Alert.alert('아이디를 입력해주세요');
      return;
    }
    if (isId == false) {
      Alert.alert('아이디를 확인해주세요');
      return;
    }
    if (!pw) {
      Alert.alert('비밀번호를 입력해주세요');
      return;
    }
    if (isPw == false) {
      Alert.alert('비밀번호를 확인해주세요');
      return;
    }
    if (!pwCheck) {
      Alert.alert('비밀번호 확인을 입력해주세요');
      return;
    }
    if (pw != pwCheck) {
      Alert.alert('비밀번호가 일치한지 확인해주세요');
      return;
    }
    if (!checked) {
      Alert.alert('성별을 선택해주세요');
      return;
    }
    if (!birth) {
      Alert.alert('생년월일을 선택해주세요');
      return;
    }

    const userData = {
      username: nickname,
      id: id,
      pw: pw,
      birth: birth,
      sex: checked,
      email: email,
    };

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log('userData 전송 성공');
        console.log('userData : ', userData);
      } else {
        console.log('userData 전송 실패');
        console.log('userData : ', userData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //username, id, pw, birth, sex, email
    <SafeAreaView style={styles.container}>
      <Text style={styles.registerText}>회원가입</Text>
      <ScrollView style={styles.registerContainer}>
        <TextInput
          style={styles.input}
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          onChangeText={onChangeNickname}
        />
        <Text style={styles.message}>{nicknameMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="이메일 입력해주세요."
          onChangeText={onChangeEmail}
        />
        <Text style={styles.message}>{emailMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디를 입력해주세요."
          onChangeText={onChangeId}
        />
        <Text style={styles.message}>{idMessage}</Text>

        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          onChangeText={onChangePw}
        />
        <Text style={styles.message}>{pwMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 확인"
          onChangeText={(pwCheck) => setPwCheck(pwCheck)}
        />
        <SafeAreaView style={styles.radioContainer}>
          <Text style={styles.radioText}>성별을 선택해주세요.</Text>
          <RadioButton.Group
            onValueChange={(value) => setChecked(value)}
            value={checked}
            style={{ flexDirection: 'row' }}
          >
            <SafeAreaView>
              <Text
                style={{ borderWidth: 1, borderColor: 'black', width: '25%' }}
              >
                남성
              </Text>
              <RadioButton
                value="male"
                style={{ width: '25%', borderWidth: 1, borderColor: 'black' }}
              />
            </SafeAreaView>
            <SafeAreaView>
              <Text>여성</Text>
              <RadioButton value="female" />
            </SafeAreaView>
          </RadioButton.Group>
        </SafeAreaView>
        <SafeAreaView>
          <Text>생년월일을 입력해주세요.</Text>
          <DatePicker
            style={{ width: 200 }}
            date={birth}
            mode="date"
            placeholder="생년월일을 선택해주세요"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2023-12-31"
            confirmBtnText="확인"
            cancelBtnText="취소"
            useNativeDriver={false}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={handleDateChange}
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={handleSubmitButton}>
          <Text style={styles.buttonText}>가입하기</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    margin: 20,
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
  },
  registerContainer: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
    marginBottom: 16,
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
  radioContainer: {
    //flex: 1,
    width: '100%',
  },
  radioText: {
    fontSize: 16,
    height: 48,
  },
  message: {
    color: 'blue',
    marginBottom: 10,
  },
});

export default RegisterScreen;
