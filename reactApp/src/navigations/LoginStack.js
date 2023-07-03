import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderLeftButton from '../components/HeaderLeftButton';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ContentTab from './ContentTab';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: '' }}
      />
      <Stack.Screen name="ContentTab" component={ContentTab} />
    </Stack.Navigator>
  );
};

export default LoginStack;
