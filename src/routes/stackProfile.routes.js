import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import Profile from "../pages/profile";
import ChangeName from "../pages/profile/changeName";
import ChangeEmail from "../pages/profile/changeEmail";
import ChangePassword from "../pages/profile/changePassword";

export default function StackProfileRoutes(props) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="ChangeName" component={ChangeName} />
      <Screen name="ChangeEmail" component={ChangeEmail} />
      <Screen name="ChangePassword" component={ChangePassword} />
    </Navigator>
  );
}
