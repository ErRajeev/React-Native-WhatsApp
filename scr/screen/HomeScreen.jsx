import React from 'react';
import {StyleSheet} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Calls from './CallsScreen';
import Update from './UpdatesScreen';
import Chats from './ChatsScreen';
import Groups from './GroupsScreen';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({navigation, state, descriptors, insets}) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({route, preventDefault}) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({route, focused, color}) => {
              const {options} = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({focused, color, size: 24});
              }

              return null;
            }}
            getLabelText={({route}) => {
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}>
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({color, size}) => {
              return <Icon name="message-text" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Updates"
          component={Update}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({color, size}) => {
              return <Icon name="access-point" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Groups"
          component={Groups}
          options={{
            tabBarLabel: 'Groups',
            tabBarIcon: ({color, size}) => {
              return (
                <Icon name="account-group-outline" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarLabel: 'Calls',
            tabBarIcon: ({color, size}) => {
              return <Icon name="phone-outline" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
