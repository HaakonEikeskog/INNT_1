import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ArrayListScreen from './screens/ArrayListScreen';
import FetchListScreen from './screens/FetchListScreen';
import FlatListScreen from './screens/FlatListScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Legg til skjermene i tab-navigasjonen */}
        <Tab.Screen name="Omrade" component={FlatListScreen} />
        <Tab.Screen name="Prisklasse" component={ArrayListScreen} />
        <Tab.Screen name="Plagg" component={FetchListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
