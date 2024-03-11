import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import ElectionsAllowed from "../pages/vote";
import Vote from "../pages/vote/vote";
import VoteCompleted from "../pages/vote/voteCompleted";

export default function StackVoteRoutes(props) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="ElectionsAllowed" component={ElectionsAllowed} />
      <Screen name="Vote" component={Vote} />
      <Screen name="VoteCompleted" component={VoteCompleted} />

    
    </Navigator>
  );
}
