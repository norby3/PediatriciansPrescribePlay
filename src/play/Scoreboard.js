import React, {Component} from 'react';
import styles from '../../styles'
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
}                         from 'react-native';
import {
  Button,
  Divider,
}                         from 'react-native-elements';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementGifCelebrationIndex,
        incrementActivityVideoIndex
       } from '../actions/viewControlActions';

const GIFS = [
   <Image source={require('../../assets/gifs_celebration/0.gif')} />,
   <Image source={require('../../assets/gifs_celebration/1.gif')} />,
   <Image source={require('../../assets/gifs_celebration/2.gif')} />,
   <Image source={require('../../assets/gifs_celebration/3.gif')} />,
   <Image source={require('../../assets/gifs_celebration/4.gif')} />,
   <Image source={require('../../assets/gifs_celebration/5.gif')} />,
   <Image source={require('../../assets/gifs_celebration/6.gif')} />,
   <Image source={require('../../assets/gifs_celebration/7.gif')} />,
   <Image source={require('../../assets/gifs_celebration/8.gif')} />,
   <Image source={require('../../assets/gifs_celebration/9.gif')} />,
 ];

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showScore: false,
      showCelebrateGif: false,
      timer1: setInterval(this.updateScore, 2000),
      timer2: setInterval(this.updateGif, 4000),

      players: this.props.players,
      sessionPlayers: this.props.sessions[this.props.sessions.length - 1].players,
    }
  }

  static navigationOptions = {
    title: 'Scoreboard',
    headerLeft: null,
    gesturesEnabled: false,
  };

  componentWillUnmount() {
    this.props.incrementGifCelebrationIndex();
    clearInterval(this.state.timer1);
    clearInterval(this.state.timer2);
  }

  updateScore = () => {
    this.setState({ showScore: true });
  }

  updateGif = () => {
    this.setState({ showCelebrateGif: true });
  }

  _gotoHome = (event) => {
    // update viewControl.activityVideoIndex - just +1
    this.props.incrementActivityVideoIndex();

    this.props.navigation.navigate('HomeStack');
  }

  // show updated scores for players from the current session
  playerUpdates = () => {
    let playersScores = [];

    this.state.sessionPlayers.map( (sessionPlayerName) => {
      this.state.players.map( (player) => {
        if(sessionPlayerName === player.name) {
          playersScores.push(
            <View style={styles.playerScoreRow} key={player.uuid}>
              <Text style={styles.playerScoreName}>{player.name}</Text>
              {this.state.showScore ?
                <Text style={styles.playerScoreName}>{player.totalScorePlay}</Text>
                :
                <ActivityIndicator
                  style={styles.activityIndicator}
                  size="large" color="#0000ff" />
              }
            </View>
          );
        }
      });
    });
    return playersScores;
  }

  render() {
    //console.log(`Scoreboard.render props: ${JSON.stringify(this.props)}`);

    return (
      <View style={styles.outerView3}>

        { this.playerUpdates() }

        <View sytle={styles.rewardsGifView}>
          { GIFS[this.props.viewControl.gifCelebrationIndex] }
        </View>

        <TouchableOpacity
          style={styles.bigBut2}
          onPress={(event) => this._gotoHome(event, "Home")}
        >
          <Text style={styles.bigButTxt}>Home</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

Scoreboard.propTypes = {
  incrementGifCelebrationIndex: PropTypes.func.isRequired,
  incrementActivityVideoIndex: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps,
  {incrementGifCelebrationIndex, incrementActivityVideoIndex})(Scoreboard);
