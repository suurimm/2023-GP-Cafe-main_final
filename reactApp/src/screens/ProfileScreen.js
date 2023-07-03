import { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [nickname, setNickname] = useState('');

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const handleLogout = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {isLogin ? (
        <SafeAreaView style={styles.logContainer}>
          <Text style={styles.nickname}>{nickname} 님, 안녕하세요!</Text>
          <TouchableOpacity style={styles.outButton} onPress={handleLogout}>
            <Text style={styles.outBtnText}>로그아웃</Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.logContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.btnText}>로그인</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
      <SafeAreaView style={styles.line} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  logContainer: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    margin: 20,
    borderRadius: 5,
  },

  nickname: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 600,
  },
  outButton: {
    backgroundColor: '#FF9F04',
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  outBtnText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 700,
  },
  button: {
    backgroundColor: '#FF9F04',
    margin: 10,
    borderRadius: 5,
    padding: 15,
  },
  btnText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700,
  },
  line: {
    borderWidth: 3,
    borderColor: '#BFBDC0',
    width: '100%',
    marginTop: 10,
  },
});

export default ProfileScreen;
