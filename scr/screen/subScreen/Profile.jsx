import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Modal, Portal, Text, Button, PaperProvider} from 'react-native-paper';

const Profile = () => {
  const [visible, setVisible] = useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 500};

  return (
    <View style={styles.container}>
      <PaperProvider>
        <Portal>
          <Modal
            style={styles.model}
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show
        </Button>
      </PaperProvider>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  model: {
    backgroundColor: 'red',
  },
});
