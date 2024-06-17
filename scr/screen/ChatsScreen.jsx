import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import ChatCard from './subScreen/ChatCard';
import Fab from './Fab';

const Chats = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contact, setContact] = useState([
    {
      id: 1,
      name: 'Kumar',
    },
    {
      id: 2,
      name: 'Ahana Varma',
    },
    {
      id: 3,
      name: 'Shama Praveen',
    },
    {
      id: 4,
      name: 'Rajeev Ranjan',
    },
  ]);

  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.search}
        />
        <FlatList
          keyExtractor={item => item.id}
          data={contact}
          renderItem={({item}) => <ChatCard details={item} />}
        />
      </View>
      <View style={styles.fab}>
        <Fab />
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    margin: 10,
  },
  fab: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
