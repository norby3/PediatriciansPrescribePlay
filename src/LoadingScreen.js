import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';

class LoadingScreen extends React.Component {

  componentWillMount = () => {
    console.log(`LoadingScreen.componentWillMount - state: ${JSON.stringify(this.props)}`);

    if (!this.props.viewControl.isIntroVideoComplete) {
      this.props.navigation.navigate('IntroVideo');
      return;
    } else if (this.props.viewControl.isIntroVideoComplete) {
      this.props.navigation.navigate('HomeStack');
      return;
    } else {
      this.props.navigation.navigate('HomeStack');
      return;
    }
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, {})(LoadingScreen);
