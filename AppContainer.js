import {
  createStackNavigator, createAppContainer, createSwitchNavigator }
   from 'react-navigation';

import LoadingScreen from './src/LoadingScreen';
import GeisingerLocation from './src/onboard/GeisingerLocation';
import AdultSignup from './src/onboard/AdultSignup';
import AdultInfo from './src/onboard/AdultInfo';
import ChildInfo from './src/onboard/ChildInfo';
import IntroVideo from './src/onboard/IntroVideo';
import Home from './src/Home';
import ChoosePlayers from './src/ChoosePlayers';

const OnboardingStack = createStackNavigator({
    GeisingerLocation: { screen: GeisingerLocation },
    AdultSignup: { screen: AdultSignup },
    AdultInfo: { screen: AdultInfo},
    ChildInfo: { screen: ChildInfo },
    IntroVideo: { screen: IntroVideo},
  }, { initialRouteName: 'GeisingerLocation' }
);

const HomeStack = createStackNavigator({
    Home: { screen: Home },
    ChoosePlayers: { screen: ChoosePlayers },

  }, { initialRouteName: 'Home' }
);

const SwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    OnboardingStack: OnboardingStack ,
    HomeStack: HomeStack,
  }, { initialRouteName: 'LoadingScreen' }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
