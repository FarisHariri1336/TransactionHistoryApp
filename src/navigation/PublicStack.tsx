import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { LoginPinScreen } from "../screens/LoginPinScreen";

const Stack = createStackNavigator<PublicStackParamList>();

export const PublicStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="LoginPin" component={LoginPinScreen} />
  </Stack.Navigator>
);
