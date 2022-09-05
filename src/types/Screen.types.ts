import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
  Tab: undefined;
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

//Chat Stack
export type ChatStackParamList = {
  Chat: undefined
  EnviarMensagem: undefined
}
type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamList, 'Chat'>
export type ChatTypes = {
  navigation: ChatScreenNavigationProp
}

//Edit Stack
export type EditarPerfilStackParamList = {
  Perfil: undefined
  EditarPerfil: undefined
  Sair: undefined
}
type EditarPerfilScreenNavigationProp = StackNavigationProp<EditarPerfilStackParamList, 'Perfil'>
export type EditarPerfilTypes = {
  navigation: EditarPerfilScreenNavigationProp
}

