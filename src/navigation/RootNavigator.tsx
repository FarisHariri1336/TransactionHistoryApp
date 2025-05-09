import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext";
import { PublicStack } from "./PublicStack";
import { PrivateStack } from "./PrivateStack";
import { RootStackParamList } from "../types/navigation/navigation";
import { InactivityWrapper } from "../components/wrapper/InactivityWrapper";

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Private">
          {() => (
            <InactivityWrapper>
              <PrivateStack />
            </InactivityWrapper>
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Public" component={PublicStack} />
      )}
    </Stack.Navigator>
  );
};
