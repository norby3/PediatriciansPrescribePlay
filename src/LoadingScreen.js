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

    if (this.props.viewControl.onboardComplete) {
      this.props.navigation.navigate('HomeStack');
      return;
    } else if (!this.props.viewControl.isOnboard1GeisingerPatientComplete) {
      this.props.navigation.navigate('OnboardingStack');
      return;
    } else if (!this.props.viewControl.isOnboard2AdultSignupComplete) {
      this.props.navigation.navigate('AdultSignup');
      return;
    } else if (!this.props.viewControl.isOnboard3AdultInfoComplete) {
      this.props.navigation.navigate('AdultInfo');
      return;
    } else if (!this.props.viewControl.isOnboard4ChildInfoComplete) {
      this.props.navigation.navigate('ChildInfo');
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
