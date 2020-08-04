import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LoginRegister} from './src/screen/LoginRegister';
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <LoginRegister />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
