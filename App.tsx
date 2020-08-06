import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {LoginRegister} from './src/screen/LoginRegister';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <LoginRegister />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
