import Routes from "./routes";

import {
  StackNavigator
} from 'react-navigation';


const AppNavigator = StackNavigator(Routes
  // , {
  //   navigationOptions: {
  //       title: ({ state }) => {
  //           if (state.params) {
  //               return `${state.params.title}`;
  //           }
  //       }
  //   }
  //}
);


export default AppNavigator;
