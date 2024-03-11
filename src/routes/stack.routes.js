import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import Home from "../pages/home";
import Enquery from "../pages/enquiry";
import VotesList from "../pages/allVotes";
import MaleVotes from "../pages/maleVotes";
import TeenVotes from "../pages/teenVotes";
import AdultVotes from "../pages/adultVotes";
import FemaleVotes from "../pages/femaleVotes";
import CandidateList from "../pages/candidateList";
import EnquiriesList from "../pages/enquiriesList";
import CandidateStatistics from "../pages/candidateStatistics";

import ChangeName from "../pages/profile/changeName";

export default function StackRoutes(props) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Enquery" component={Enquery} />
      <Screen name="TeenVotes" component={TeenVotes} />
      <Screen name="VotesList" component={VotesList} />
      <Screen name="MaleVotes" component={MaleVotes} />
      <Screen name="ChangeName" component={ChangeName} />
      <Screen name="AdultVotes" component={AdultVotes} />
      <Screen name="FemaleVotes" component={FemaleVotes} />
      <Screen name="CandidateList" component={CandidateList} />
      <Screen name="EnquiriesList" component={EnquiriesList} />
      <Screen name="CandidateStatistics" component={CandidateStatistics} />
    </Navigator>
  );
}
