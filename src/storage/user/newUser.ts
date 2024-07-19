import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_INFO } from "../storageConfig";

export async function newUser(user: string){
  try {
    const storage = user
    await AsyncStorage.setItem(USER_INFO, storage)
    // const storage = await AsyncStorage.getItem(USER_INFO)
    // let user: string = storage ? storage : ''
    // return user
  } catch (error) {
    throw error
  }
}