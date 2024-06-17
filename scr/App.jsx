import {SafeAreaView, StyleSheet} from 'react-native';

import React from 'react';
import HomeScreen from './screen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Pages

import CallsScreen from './screen/CallsScreen';
import UpdatesScreen from './screen/UpdatesScreen';
import ChatsScreen from './screen/ChatsScreen';
import GroupsScreen from './screen/GroupsScreen';
import ChatCard from './screen/subScreen/ChatCard';
import Chat from './screen/Chat';
import Contacts from './screen/subScreen/Contacts';
import Profile from './screen/subScreen/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WhatsApp">
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{name: 'Overview'}}
          />
          <Stack.Screen name="WhatsApp" component={HomeScreen} />
          <Stack.Screen name="ChatCard" component={ChatCard} />
          <Stack.Screen name="Chats" component={ChatsScreen} />
          <Stack.Screen name="Update" component={UpdatesScreen} />
          <Stack.Screen name="Groups" component={GroupsScreen} />
          <Stack.Screen name="Calls" component={CallsScreen} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
