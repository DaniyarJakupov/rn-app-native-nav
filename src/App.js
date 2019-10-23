import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { registerScreens } from './screens';

const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: '#fff',
      orientation: ['portrait'],
      direction: 'locale',
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      iconColor: '#331B3C',
      textColor: '#331B3C',
      selectedIconColor: '#F5775A',
      selectedTextColor: '#F5775A',
      fontSize: 12,
    },
  });

export const start = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    setDefaultOptions();

    Promise.all([
      MaterialIcons.getImageSource('home', 20),
      MaterialIcons.getImageSource('settings', 20),
    ]).then(([home, settings]) => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.tabOne',
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      title: {
                        text: 'Tab One',
                        fontSize: 16,
                        color: '#F5775A',
                      },
                    },
                    bottomTab: {
                      text: 'Tab One',
                      icon: home,
                      testID: 'tab1',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.tabTwo',
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      title: {
                        text: 'Tab Two',
                        fontSize: 16,
                        color: '#F5775A',
                      },
                    },
                    bottomTab: {
                      text: 'Tab Two',
                      icon: settings,
                      testID: 'tab2',
                    },
                  },
                },
              },
            ],
          },
        },
      });
    });
  });
};
