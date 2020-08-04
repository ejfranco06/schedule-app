import React, {useState} from 'react';
import {Text, View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import LinearGradient from 'react-native-linear-gradient';

type FormData = {
  username: string;
  password: string;
};

export const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <LinearGradient
      colors={['#EB3349', '#F45C43']}
      style={styles.container}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <View style={styles.appNameContainer}>
        <Text style={styles.appName}>Schedule App</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>{isLogin ? 'Login' : 'Register'}</Text>
        <Text style={styles.label}>Username</Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="username"
          rules={{required: true}}
          defaultValue=""
        />

        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              secureTextEntry={true}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />

        <View style={styles.button}>
          <Button
            color="#F45C43"
            title="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  appNameContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#F45C43',
    borderRadius: 4,
  },

  innerButton: {
    backgroundColor: '#F45C43',
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 5,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
