import {AppNavigator} from '../AppNavigation';
import { NavigationActions } from 'react-navigation';

const NavReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'goToProfile':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Profile' }),
                state
            );
            break;
         case 'goToDashboard':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Dashboard' }),
                state
            );
            break;
        case 'goToRepos':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Repositories' }),
                state
            );
            break;
        case 'goToNotes':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Notes' }),
                state
            );
            break;
        case 'goToWebView':
        newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Web_View' }),
              {...state, webViewURL : action.webViewURL}
        );
        break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

export default NavReducer;
