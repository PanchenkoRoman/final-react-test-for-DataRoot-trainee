import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import aboutUs from './aboutUs';
import projects from './projects';
import Park from './Park';


export default function createRootReducer({ apolloClient }) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    user,
    runtime,
    intl,
    aboutUs,
    projects,
    Park
  });
}
