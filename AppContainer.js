import {
  createStackNavigator, createAppContainer, createSwitchNavigator }
   from 'react-navigation';

import LoadingScreen from './src/LoadingScreen';

import IntroVideo from './src/IntroVideo';
import Home from './src/Home';
import FamilyProfile from './src/FamilyProfile';
import DanceBonus from './src/DanceBonus';
import ChoosePlayers from './src/ChoosePlayers';
import AddPlayer from './src/AddPlayer';

import MyZoo from './src/zoo/MyZoo';
import Activity from './src/zoo/Activity';
import MiniBreak from './src/zoo/MiniBreak';

import MyPlay from './src/play/MyPlay';
import VideoPlayer from './src/play/VideoPlayer';
import Scoreboard from './src/play/Scoreboard';


const HomeStack = createStackNavigator({
  Home: { screen: Home },
  DanceBonus: { screen: DanceBonus },
  ChoosePlayers: { screen: ChoosePlayers },
  AddPlayer: { screen: AddPlayer },
  FamilyProfile: { screen: FamilyProfile },
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
  IntroVideo: IntroVideo,
  HomeStack: HomeStack,
  MyZooStack: MyZooStack,
  MyPlayStack: MyPlayStack,
  }, { initialRouteName: 'LoadingScreen' }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
