import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storageConfig";
import { MealDTO } from "../../dtos/MealDTO";

export async function mealsGetAll(){
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION)
    let meals: MealDTO[] = storage ? JSON.parse(storage) : []
    meals = meals.map(meal =>({
      ...meal,
      createdAd: new Date(meal.createdAd)
    }))
    return meals
  } catch (error) {
    throw error
  }
}