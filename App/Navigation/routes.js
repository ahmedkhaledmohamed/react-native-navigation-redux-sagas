import Main from "./Components/Main"
import Notes from "./Components/Notes"
import Profile from "./Components/Profile"
import Repositories from "./Components/Repositories"
import Dashboard from "./Components/Dashboard"
import Web_View from './Components/Helpers/WebView';




const Routes = {
  Main: {
      screen: Main,
      navigationOptions: {
      title: 'Github Notetaker'
    }
  },
  Dashboard: {
      screen: Dashboard,
      navigationOptions: {
      title: 'Dashboard'
    }
  },
  Notes: {
      screen: Notes,
      navigationOptions: {
      title: 'Notes'
    }
  },
  Repositories: {
      screen: Repositories,
      navigationOptions: {
      title: 'Repositories Page'
    }
  },
  Profile: {
      screen: Profile,
      navigationOptions: {
      title: 'Profile Page'
    }
  },
  Web_View: {
      screen: Web_View,
      navigationOptions: {
      title: 'Web View'
    }
  }
};


export default Routes;
