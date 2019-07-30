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
import AWS from 'aws-sdk';
import Config from "react-native-config";

const region = 'us-east-2';
const accessKeyId = Config.AKID;
const secretAccessKey = Config.SAK;
const tableName = 'myplayrx';

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: region,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});


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

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      console.log('Home didFocus listener started');
      // Call any action
      if (this.props.viewControl.isOnboardComplete) {
        this.updateAwsDb();
      }
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  handleSubmit = (event, game) => {
    if (this.props.viewControl.isOnboardComplete) {
      this.props.setGame({ game: game });
      this.props.navigation.navigate('ChoosePlayers');
    } else {
      this.props.navigation.navigate('OnboardingStack');
    }
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

  updateAwsDb = async () => {
    console.log(`updateAwsDb started`);

    let stateData = {
      family: this.props.family,
      viewControl: this.props.viewControl,
      players: this.props.players,
      sessions: this.props.sessions,
      bonusSessions: this.props.bonusSessions,
    };
    console.log(`updateAwsDb stateData = ${JSON.stringify(stateData)}`);

    let params = {
      Item: {
        uuid:  this.props.family.uuid,
        doc: stateData,
      },
      //ReturnConsumedCapacity: "TOTAL",
      //ReturnValues: "ALL_NEW",
      TableName: tableName,
    };

    console.log(`updateAwsDb params = ${JSON.stringify(params)}`);

    await dynamoDB.put(params, function(err, data) {
      if (err) {
        console.log('error after updateAwsDb dynamoDB.put');
        console.error(err);
      }
      else {
        console.log('success after updateAwsDb dynamoDB.put');
        console.log(data);
      }
    });

  };

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
                <Text style={styles.bigButTxt}>ages 5-8</Text>
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
                <Text style={styles.bigButTxt}>ages 9-12</Text>
              </View>
            </View>

          </TouchableOpacity>

          { !this.props.viewControl.isOnboardComplete ?
            <Text style={styles.devOnlyText2}>
              Signup required to play either game.</Text> : null
          }

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
            Complete a game session to earn a Dance Party Bonus.</Text> }



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
  bonusSessions: state.bonusSessions,
});

//export default connect(mapStateToProps, { newSession })(Home);
export default connect(mapStateToProps, {setGame})(Home);
