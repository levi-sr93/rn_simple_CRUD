import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

//recebe os parametros a partir das rotas
export default ({route, navigation}) => {
  // console.warn(Object.keys(props.route.params));

  const [user, setUser] = useState(route.params ? route.params : {});
  // console.warn(user);

  return (
    <View style={style.form}>
      <Text>Name</Text>

      <TextInput
        style={style.input}
        onChangeText={(name) =>
          setUser({
            ...user,
            name,
          })
        }
        placeholder="Inform name"
        value={user.name}
      />

      <Text>E-mail</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) =>
          setUser({
            ...user,
            email,
          })
        }
        placeholder="Inform email"
        value={user.email}
      />

      <Text>Avatar URL</Text>
      <TextInput
        style={style.input}
        onChangeText={(avatarURL) =>
          setUser({
            ...user,
            avatarURL,
          })
        }
        placeholder="Avatar URL"
        value={user.avatarURL}
      />
      <Button
        title="Save"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
  },

  form: {
    padding: 12,
  },
});
