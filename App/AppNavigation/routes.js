import Main from "../Containers/Main"
import Notes from "../Containers/Notes"
import Profile from "../Containers/Profile"
import Repositories from "../Containers/Repositories"
import Dashboard from "../Containers/Dashboard"
import Web_View from '../Containers/WebView';




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
