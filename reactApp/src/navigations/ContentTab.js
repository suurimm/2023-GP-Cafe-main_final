import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommStack from './RecommStack';
import LoginStack from './LoginStack';
//import RecommendScreen from '../screens/RecommendScreen';
import PriceScreen from '../screens/PriceScreen';
import HomeScreen from '../screens/HomeScreen';
import LikeScreen from '../screens/LikeScreen';
//import ProfileScreen from '../screens/ProfileScreen';
import { ContentRoutes } from './routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const getTabBarIcon = ({ focused, color, size, name }) => {
  const iconName = focused ? name : `${name}`;
  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

const ContentTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ContentRoutes.RECOMMEND}
        component={RecommStack}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'coffee' }),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={ContentRoutes.PRICE}
        component={PriceScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'cash' }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ContentRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'home' }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ContentRoutes.LIKE}
        component={LikeScreen}
        options={{
          tabBarIcon: (props) =>
            getTabBarIcon({ ...props, name: 'cards-heart' }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ContentRoutes.PROFILE}
        component={LoginStack}
        options={{
          tabBarIcon: (props) =>
            getTabBarIcon({ ...props, name: 'account-circle' }),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
