import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar, Card, IconButton, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ChatCard = ({details}) => {
  const navigation = useNavigation();
  const {name, id} = details;

  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={() => navigation.push('Chat', {chatDetails: details})}>
        <Card.Title
          title={name}
          subtitle="Kaiye ho.?"
          left={props => (
            <TouchableRipple
              onPress={() => navigation.push('Profile', {userId: id})}>
              <Avatar.Image
                size={50}
                source={require('../../assets/avatar.png')}
              />
            </TouchableRipple>
          )}
          right={props => (
            <IconButton
              {...props}
              icon="dots-vertical"
              onPress={() => console.log('Options icon pressed')}
            />
          )}
        />
      </TouchableRipple>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
