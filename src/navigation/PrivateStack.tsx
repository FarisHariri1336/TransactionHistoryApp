import { createStackNavigator } from "@react-navigation/stack";
import { TransactionListScreen } from "../screens/TransactionListScreen";
import { TransactionDetailScreen } from "../screens/TransactionDetailScreen";

const Stack = createStackNavigator<PrivateStackParamList>();

export const PrivateStack = () => (
  <Stack.Navigator initialRouteName="TransactionList" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TransactionList" component={TransactionListScreen} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
  </Stack.Navigator>
);
