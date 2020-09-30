import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';

import users from '../mock_data/users';

export default (props) => {
  // console.warn(Object.keys(props)); - Verficando as chaves que vem no objeto de props.

  function confirmUserDeletion(user) {
    Alert.alert('Delete User', 'Confirm User Deletion ?', [
      {
        text: 'Yes',
        onPress() {
          console.warn('Deleting...' + user.id);
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={(user) => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarURL}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm', user)}
      />
    );
  }
  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()} // definindo chave para cada elemento
        data={users} //de onde estou pegando os dados dessa lista
        renderItem={getUserItem}
      />
    </View>
  );
};
