import {StyleSheet, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Fab() {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <FAB
        icon="message-plus-outline"
        style={styles.fab}
        onPress={() => {
          navigate.push('Contacts');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
