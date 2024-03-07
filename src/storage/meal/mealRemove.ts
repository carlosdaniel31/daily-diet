import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "../../dtos/MealDTO";
import { mealsGetAll } from "./mealsGetAll";
import { MEALS_COLLECTION } from '../storageConfig'

export async function mealRemove(meal: MealDTO){
  try {
    const storage = await mealsGetAll()
    const filtered = storage.filter(item => item.description !== meal.description)
    const meals = JSON.stringify(filtered)

    await AsyncStorage.setItem(MEALS_COLLECTION, meals)
  } catch (error) {
    throw error
  }
}