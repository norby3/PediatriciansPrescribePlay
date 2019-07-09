import React, {Component} from 'react';
import styles from '../styles';

import {
  Platform, ScrollView, StyleSheet, Text, TextInput,
  TouchableOpacity, View
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setGame } from './actions/viewControlActions';

import { Dimensions }       from 'react-native';
import Image from 'react-native-scalable-image';
const { width, height } = Dimensions.get('window');


class Home extends Component {
  static navigationOptions = {
         title: 'Choose Game',
    headerLeft: null,

  };

  constructor(props) {
    super(props);

    this.state = {
      game: '',
      showDanceBonusButton: false,

    }
  };

  componentWillMount() {
    this.danceBonus();
  }

  handleSubmit = (event, game) => {
    this.props.setGame({ game: game });
    this.props.navigation.navigate('ChoosePlayers');
  }

  // if the last session was completed less than 3 hours ago, show Dance Bonus
  // 3 h = 10800000 ms
  danceBonus = () => {

    let nowMillis = Date.now();
    let diffMillis = nowMillis - this.props.viewControl.lastSessionCompletedAtMillis;

    if(diffMillis <= 10800000 ) {
      this.setState({showDanceBonusButton: true});
      console.log('danceBonus is true');
    } else {
      console.log('danceBonus is false');
    }
  }
  gotoDanceBonus = () => {
    //console.log('xfer to DanceBonus view');
    this.props.navigation.navigate('DanceBonus');
  }

  render() {
    console.log(`Home.js this.props: ${JSON.stringify(this.props)}`);
    console.log(`Home.js this.state: ${JSON.stringify(this.state)}`);

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>

          <TouchableOpacity
            style={styles.wideButton}
            onPress={(event) => this.handleSubmit(event, "MyZoo")}
            ref={(input) => { this.nextButton = input }}
          >
            <View style={styles.contentView2}>
              <View style={styles.twoPanel}>
              <Image
                  key="horse-drawing"
                  width={width*0.3}
                  source={require('../assets/images/horse-icon.png')}
                  style={styles.zooImage}
              />
              </View>
              <View style={styles.twoPanel}>

                <Text style={styles.bigButTxt}>MyZoo</Text>
                <Text style={styles.bigButTxt}>age 5+</Text>
              </View>
            </View>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.wideButton}
            onPress={(event) => this.handleSubmit(event, "MyPlay")}
            ref={(input) => { this.nextButton = input }}
          >
            <View style={styles.contentView2}>
              <View style={styles.twoPanel}>
              <Image
                  key="kid-jumping"
                  width={width*0.3}
                  source={require('../assets/images/kid-jumping.png')}
                  style={styles.zooImage}
              />
              </View>
              <View style={styles.twoPanel}>
                <Text style={styles.bigButTxt}>MyPlay</Text>
                <Text style={styles.bigButTxt}>age 9+</Text>
              </View>
            </View>

          </TouchableOpacity>

          { this.state.showDanceBonusButton ?
            <TouchableOpacity
              style={[styles.wideButton, styles.steelblue]}
              onPress={(event) => this.gotoDanceBonus(event, "DanceBonus")}
              ref={(input) => { this.nextButton = input }}
            >
              <View style={styles.contentView2}>
                <View style={styles.twoPanel}>
                <Image
                    key="dance-icon"
                    width={width*0.3}
                    source={require('../assets/images/dance-icon3.png')}
                    style={styles.zooImage}
                />
                </View>
                <View style={styles.twoPanel}>
                  <Text style={styles.bigButTxt}>Dance</Text>
                  <Text style={styles.bigButTxt}>Party</Text>
                  <Text style={styles.bigButTxt}>Bonus</Text>
                </View>
              </View>

            </TouchableOpacity>
          : <Text style={styles.devOnlyText2}>
            (Complete a game session to earn a Dance Party Bonus)</Text> }

        </View>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  setGame: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

//export default connect(mapStateToProps, { newSession })(Home);
export default connect(mapStateToProps, {setGame})(Home);
