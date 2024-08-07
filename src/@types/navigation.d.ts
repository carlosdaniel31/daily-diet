import { MealDTO } from '../dtos/MealDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      details_diet: undefined
      new_meal: undefined;
      feedback_within_diet: undefined;
      feedback_off_diet: undefined;
      details_meal: {
        meal: MealDTO
      };
    }
  }
}