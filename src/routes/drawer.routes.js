import { createDrawerNavigator } from "@react-navigation/drawer";
const { Navigator, Screen } = createDrawerNavigator();

import StackRoutes from "./stack.routes";
import StackProfileRoutes from "./stackProfile.routes";
import StackElectionRoutes from "./stackElection.routes";
import StackVoteRoutes from "./stackVote.routes";

import Login from "../AuthPages/login";
import Register from "../AuthPages/register";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const DrawerRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "#127478",
        },
      }}
    >
      <Screen name="E-VOTING" component={StackRoutes} />
      <Screen
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5
              style={{ marginRight: -20 }}
              name="user"
              color={color}
              size={15}
            />
          ),
        }}
        name="Perfil"
        component={StackProfileRoutes}
      />
      <Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5
              style={{ marginRight: -20 }}
              name="file-invoice"
              color={color}
              size={15}
            />
          ),
        }}
        name="Minhas eleições"
        component={StackElectionRoutes}
      />
      <Screen
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5
              style={{ marginRight: -20 }}
              name="file-archive"
              color={color}
              size={15}
            />
          ),
        }}
        name="Votar"
        component={StackVoteRoutes}
      />

      <Screen 
      
      options={{
        drawerIcon : ({color}) =>(
          <FontAwesome5 
          style={{ marginRight: -20 }}
          name="house-user"
          color={color}
          size={15}
          
          />
        )
      }}
      name="Entrar" component={Login} />



      <Screen
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5
              style={{ marginRight: -20 }}
              name="user-check"
              color={color}
              size={15}
            />
          ),
        }}
        name="Criar conta"
        component={Register}
      />
    </Navigator>
  );
};

export default DrawerRoutes;
