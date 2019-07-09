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
import DanceBonus from './src/DanceBonus';
import ChoosePlayers from './src/ChoosePlayers';
import AddPlayer from './src/AddPlayer';

import MyZoo from './src/zoo/MyZoo';
import Activity from './src/zoo/Activity';
import MiniBreak from './src/zoo/MiniBreak';

import MyPlay from './src/play/MyPlay';
import VideoPlayer from './src/play/VideoPlayer';
import Scoreboard from './src/play/Scoreboard';

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
  DanceBonus: { screen: DanceBonus },
  ChoosePlayers: { screen: ChoosePlayers },
  AddPlayer: { screen: AddPlayer },
  }, { initialRouteName: 'Home' }
);

const MyZooStack = createStackNavigator({
  MyZoo: { screen: MyZoo },
  Activity: { screen: Activity },
  MiniBreak: { screen: MiniBreak },
  }, { initialRouteName: 'MyZoo' }
);

const MyPlayStack = createStackNavigator({
  MyPlay: { screen: MyPlay },
  VideoPlayer: { screen: VideoPlayer },
  Scoreboard: { screen: Scoreboard },
  }, { initialRouteName: 'MyPlay' }
);

const SwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  OnboardingStack: OnboardingStack ,
  HomeStack: HomeStack,
  MyZooStack: MyZooStack,
  MyPlayStack: MyPlayStack,
  }, { initialRouteName: 'LoadingScreen' }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
