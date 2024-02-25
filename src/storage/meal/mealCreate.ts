import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MealDTO } from '../../dtos/MealDTO'
import { MEALS_COLLECTION } from '../../storage/storageConfig'

export async function mealCreate(newMeal: MealDTO){
  try {
    const storageMeals = await mealsGetAll()
    const storage = JSON.stringify([...storageMeals, newMeal])
    await AsyncStorage.setItem(MEALS_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}