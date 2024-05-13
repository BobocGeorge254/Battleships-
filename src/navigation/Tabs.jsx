import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/PlayScreens/HomeScreen';
import AvailableGames from '../screens/PlayScreens/AvailableGames';
import GamesStack from './GamesStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="AvailableGames" component={AvailableGames} options={{title: 'Discover'}}/>
      <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
      <Tab.Screen name="MyGamesStack" component={GamesStack} options={{title: 'My games'}}/>
    </Tab.Navigator>
  );
}

export default Tabs;