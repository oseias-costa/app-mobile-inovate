import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, Image, TextInput, View } from 'react-native';
import { auth } from './firebase';
import Logo from '../../assets/logo-completo.svg'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginApp = async () => {

        await signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            console.log('logado')
          })
          .catch((err) => {
            console.log('erro ao logar')
            // setShowLoading(false)
            // setErrorStyle('Login__Form-error')
            // switch (err.message) {
            //   case "Firebase: Error (auth/invalid-email).":
            //     setError("Email inválido");
            //     break;
            //   case "Firebase: Error (auth/user-not-found).":
            //     setError("Usuário não encontrado");
            //     break;
            //   case "Firebase: Error (auth/wrong-password).":
            //     setError("Senha inválida");
            //     break;
            //   default:
            //     setError("Erro, contate o administrador");
            // }
          });
      };

  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
    <Image source={Logo} style={{height: 200, width: 200, tintColor:'#1e5fb4', paddingBottom: 20}} />
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={() => LoginApp()} style={{width: 200, marginTop: 40}} />
    </View>
    </View>
  );
}

