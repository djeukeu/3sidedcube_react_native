import { View, Text } from 'react-native';
import React from 'react';
import { Dialog, Portal, Text } from 'react-native-paper';
const ErrorDialog = () => {
    const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  return (
    <Portal>
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Icon icon="alert" />
      <Dialog.Title style={styles.title}>This is a title</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyMedium">This is simple dialog</Text>
      </Dialog.Content>
    </Dialog>
  </Portal>
  );
};

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
    },
  })

export default ErrorDialog;
