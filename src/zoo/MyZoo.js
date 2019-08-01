import React, { Component } from 'react';
import styles from '../../styles';
import {
  Button,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
 }                          from 'react-native';
import Image from 'react-native-scalable-image';
import { animalGifs }     from './AnimalGifs.js';
import { withNavigation } from "react-navigation";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newSession } from '../actions/sessionActions';

const { width, height } = Dimensions.get('window');

class MyZoo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalScoreZoo: 1,
      //childFirstName: this.props.family.childFirstName,
    }
  }

  static navigationOptions = {
         title: null,
    headerLeft: null,
  };

  // componentWillMount() {
  //   let players = this.props.navigation.getParam('players');
  //   console.log(`MyZoo.componentWillMount players = ${JSON.stringify(players)}`);
  //   this.setState({childFirstName: players[0].name});
  // }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      console.log('MyZoo didFocus listener started');
      // Call any action
      this.reloadData();
    });
  }

  // reloadData = async() => {
  //   console.log(`MyZoo.reloadData started`);
  //
  //   let session = this.props.sessions[this.props.sessions.length-1];
  //   console.log(`MyZoo reloadData session = ${JSON.stringify(session)}`);
  //
  //   await this.setState({
  //     //zooAnimalCount: this.props.players[1].totalScoreZoo,
  //     //zooAnimalCount: session.zooAnimalCount,
  //     zooHasNewAnimal: session.zooHasNewAnimal,
  //     childFirstName: session.players[0].name,
  //   });
  // }

  reloadData = () => {
    console.log(`MyZoo.reloadData started`);
    this.setState({ totalScoreZoo: this.props.players[0].totalScoreZoo });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  onPress = () => {
    // create a NEW_SESSION
    let nowMillis = Date.now();
    let now = new Date(nowMillis);

    this.props.newSession({
      game: this.props.viewControl.game,
      players: this.props.viewControl.players,
      createdAtLocalTimezone: now.toString(),
      createdAtUTC: now.toUTCString(),
      zooGoalCounter: 6,
      zooActivityCounter: 1,
      zooHasNewAnimal: false,
      zooAnimalCount: this.props.players[0].totalScoreZoo,
    });

    this.props.navigation.navigate('Activity');
  }

  getZooAnimals = () => {
    let gifs = [];

    //for(let i=0; i <= 5; i++) {
    for(let i=0; i < this.state.totalScoreZoo; i++) {
      gifs.push(animalGifs[i]);
    }
    return gifs;
  }

  _gotoHome = (event) => {
    this.props.navigation.navigate('HomeStack');
  }

  render() {
    //console.log(`MyZoo.render state: ${JSON.stringify(this.state)}`);
    //console.log(`MyZoo.render props: ${JSON.stringify(this.props)}`);
    //console.log(`MyZoo.render childFirstName: ${JSON.stringify(this.props.family.childFirstName)}`);

    return (
      <ScrollView style={{flex:1}}>

        <View style={styles.myZooView}>
          <Text style={styles.coreLoopText1}>
            { (this.props.players[0].name.toLowerCase().slice(-1) === 's') ?
               this.props.players[0].name + "'" :
               this.props.players[0].name + "'s"
            } Zoo</Text>
          <Text>&nbsp;</Text>

          <View style={styles.listZooAnimalsView}>

            {this.getZooAnimals()}

          </View>

          <Text>&nbsp;</Text>
          <Text>&nbsp;</Text>
          <Text style={styles.coreLoopText1}>
            Zoo Animals = {this.state.totalScoreZoo}
          </Text>

          <TouchableOpacity
            style={styles.bigBut2}
            onPress={this.onPress}
            >
            <Text style={styles.bigButTxt}>Add Animal</Text>
          </TouchableOpacity>
          <Text>&nbsp;</Text>

          <TouchableOpacity
            style={styles.bigBut2}
            onPress={(event) => this._gotoHome(event, "Home")}
          >
            <Text style={styles.bigButTxt}>Home</Text>
          </TouchableOpacity>

          <Text>&nbsp;</Text>
          <Text>&nbsp;</Text>


        </View>

      </ScrollView>
    );
  }
}
//export default withNavigation(MyZoo);

MyZoo.propTypes = {
  newSession: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

//export default connect(mapStateToProps, {})(MyZoo);
export default connect(mapStateToProps, {newSession})(withNavigation(MyZoo));
