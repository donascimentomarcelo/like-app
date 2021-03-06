import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import * as ENV from './../helpers/Constants';

export async function setToken(token) {
  try {
    await AsyncStorage.setItem('@token', token)
  } catch (e) {
    Alert.alert(`${e.name} : ${e.message}`);
  }
}

export async function getToken() {
  try {
    const jsonValue = await AsyncStorage.getItem('@token');
    return jsonValue != null ? jsonValue : null;
  } catch (e) {
    Alert.alert(`${e.name} : ${e.message}`);
  }
}

export async function getHeader() {

  let token = null;

  await getToken().then(response => token = response);

  const headers = {
    'Content-Type': ENV.APPLICATION_JSON,
    'Authorization': token
  };

  return headers;
}