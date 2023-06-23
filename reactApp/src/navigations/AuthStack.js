import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderLeftButton from '../components/HeaderLeftButton';
import RecommendScreen from '../screens/RecommendScreen';
import RecommendScreen2 from '../screens/RecommendScreen2';
import ContentTab from './ContentTab';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="RecommendScreen"
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
        name="RecommendScreen"
        component={RecommendScreen}
        options={{ title: '주소 설정' }}
      />
      <Stack.Screen
        name="RecommendScreen2"
        component={RecommendScreen2}
        options={{ title: '목적 설정' }}
      />
      <Stack.Screen name="ContentTab" component={ContentTab} />
    </Stack.Navigator>
  );
};

export default AuthStack;
