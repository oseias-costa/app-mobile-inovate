import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { CircleStatus } from '../global/icons/CircleStatus';
import { Time } from '../global/icons/Time';

export const Profile = () => {
  const { userLogged } = useContext(AuthContext)
  const user = userLogged[0]
  return (
    <View style={styles.container}>
      <Time />
      <CircleStatus fill='red' />
      <Text>{user.nome}</Text>
      <Text>{user.email}</Text>
      <Image source={ {uri: user.image}} style={{width: 150, height: 150}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});