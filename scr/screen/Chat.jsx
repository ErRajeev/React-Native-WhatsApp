import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Text, Avatar} from 'react-native-paper';

// import ImageDark from '../assets/chatImageDark.png';
const ImageLight = require('../assets/chatImageLight.jpg');

const Chat = ({route, navigation}) => {
  const [me, setMe] = useState('');
  const [isMic, setIsMic] = useState(false);
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello Rajeev', sender: 'other'},
    {id: '2', text: 'Hello there !', sender: 'me'},
  ]);

  const {chatDetails} = route.params || {};

  const sendMessage = () => {
    if (me.trim()) {
      const newMessage = {id: Date.now().toString(), text: me, sender: 'me'};
      setMessages([...messages, newMessage]);
      setMe('');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: chatDetails?.name || 'User',
    });
  }, [navigation, chatDetails.name]);

  return (
    <View style={styles.container}>
      <ImageBackground source={ImageLight} style={styles.chatField}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={
                item.sender === 'me'
                  ? styles.messageRowRight
                  : styles.messageRow
              }>
              <View style={item.sender === 'me' ? styles.me : styles.other}>
                <Text
                  style={
                    item.sender === 'me' ? styles.meText : styles.otherText
                  }>
                  {item.text}
                </Text>
              </View>
            </View>
          )}
        />
      </ImageBackground>
      <View style={styles.chatInput}>
        <View style={styles.inputWithEmoji}>
          <Avatar.Icon
            size={30}
            icon="emoticon-kiss-outline"
            style={styles.mic}
          />
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor="gray"
            onChangeText={setMe}
            value={me}
            onSubmitEditing={sendMessage}
            onKeyPress={() => setIsMic(true)}
            onBlur={() => setIsMic(false)}
          />
        </View>
        {!isMic || !me ? (
          <TouchableOpacity onPress={() => console.log('Microphone pressed')}>
            <Avatar.Icon size={45} icon="microphone" style={styles.mic} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={sendMessage}>
            <Avatar.Icon size={45} icon="send" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chatField: {
    flex: 1,
  },
  messageRow: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'flex-start',
  },
  messageRowRight: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'flex-end',
  },
  other: {
    maxWidth: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    padding: 8,
  },
  me: {
    maxWidth: '80%',
    backgroundColor: '#0078fe',
    borderRadius: 15,
    padding: 8,
    color: 'white',
  },
  otherText: {
    color: 'black',
  },
  meText: {
    color: 'white',
  },
  chatInput: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mic: {},
  inputWithEmoji: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '75%',
    borderColor: '#dedede',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: '#000000',
    fontSize: 18,
  },
});

export default Chat;
