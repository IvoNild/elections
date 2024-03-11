import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import MyElections from "../pages/myElections";
import Enquery from "../pages/enquiry";
import NewElection from "../pages/newElection";
import AddCandidates from "../pages/newElection/addCadidates";
import AddVoter from "../pages/newElection/addVoter";

export default function StackElectionRoutes(props) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="MyElections" component={MyElections} />
      <Screen name="MyEnquery" component={Enquery} />
      <Screen name="NewElection" component={NewElection} />
      <Screen name="AddCandidates" component={AddCandidates} />
      <Screen name="AddVoter" component={AddVoter} />
    </Navigator>
  );
}
