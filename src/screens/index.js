import { Navigation } from 'react-native-navigation';

import tabOne from './tabOne';
import tabTwo from './tabTwo';

export function registerScreens() {
  Navigation.registerComponent('navigation.tabOne', () => tabOne);
  Navigation.registerComponent('navigation.tabTwo', () => tabTwo);
}
