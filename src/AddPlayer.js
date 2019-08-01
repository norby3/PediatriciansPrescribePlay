import React, {Component} from 'react';
import styles from '../styles';
import {
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  CheckBox,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlayer } from './actions/playerActions';
import uuidv4 from 'uuid/v4';

class AddPlayer extends Component {

  static navigationOptions = {
    title: 'Add Player',
    //headerLeft: null,
    //gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      uuid: true,
    }
  };

  validateForm() {
    //console.log(`this.state.phone.length == 10 ${this.state.phone.length == 10}`);
    return (
      this.state.name.length >= 2
    );
  }

  handleSubmit = event => {

    this.props.addPlayer({
      name: this.state.name,
      uuid: uuidv4()
    });

    this.props.navigation.navigate('ChoosePlayers');
  }

  render() {
    //console.log(`AddPlayer state: ${JSON.stringify(this.state)}`);
    //console.log(`AddPlayer this.props = ${JSON.stringify(this.props)}`);
    return (

      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>New Player Name</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="grey"
              onChangeText={(name) => this.setState({name: name})}
              value={this.state.name}
              textContentType={'givenName'}
              maxLength={20}
              blurOnSubmit={false}
            />
          </View>

          <TouchableOpacity
            style={this.validateForm()? styles.bigBut2 : styles.bigBut2disabled }
            disabled={!this.validateForm()}
            onPress={(event) => this.handleSubmit(event, "Add")}
            ref={(input) => { this.nextButton = input }}
          >
            <Text style={styles.bigButTxt}>ADD</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
});

//export default connect(null, {setGeisingerPatient})(GeisingerPatient);
export default connect(mapStateToProps, {addPlayer})(AddPlayer);
