import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes"
import { getUser } from "../storage/user/getUser";

export async function Routes(){
  const user = await getUser()

  return (
    <NavigationContainer>
      {user ?<AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}