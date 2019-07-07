import React, {Component} from 'react';
import styles from '../../styles';
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
} from 'react-native-elements';
import ModalSelector      from 'react-native-modal-selector';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newChild } from '../actions/familyActions';
import uuidv4 from 'uuid/v4';

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => {
      console.log('close the keyboard');
      Keyboard.dismiss();
    }}>
    {children}
  </TouchableWithoutFeedback>
);


class ChildInfo extends Component {
  static navigationOptions = {
    title: 'Child Information',
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
          childFirstName: '',
           childLastName: '',

          birthdateMonth: '',
     birthdateMonthValid: false,

            birthdateDay: '',
       birthdateDayValid: false,

           birthdateYear: '',
      birthdateYearValid: false,

               birthdate: '',
          birthdateValid: false,
                  gender: '',
    }
  }

  validateBirthdateMonth = () => {
    let birthdateMonth = this.state.birthdateMonth;
    console.log(`validateBirthdateMonth birthdateMonth: ${birthdateMonth}`);

    let reg = /^(1[0-2]|[1-9])$/;     // 1-12

    if(reg.test(birthdateMonth) === false ) {
      console.log(`validateBirthdateMonth false`);
      this.setState({birthdateMonthValid: false}, () => this.manageBirthdate());
    } else {
      console.log(`validateBirthdateMonth true`);
      this.setState({birthdateMonthValid: true}, () => this.manageBirthdate());
    }
  }

  validateBirthdateDay = () => {
    let birthdateDay = this.state.birthdateDay;
    console.log(`validateBirthdateDay birthdateDay: ${birthdateDay}`);
    let reg = /^(3[01]|[12][0-9]|[1-9])$/ ;    // 1-31

    if(reg.test(birthdateDay) === false ) {
      console.log(`validateBirthdateDay false`);
      this.setState({birthdateDayValid: false}, () => this.manageBirthdate());
    } else {
      console.log(`validateBirthdateDay true`);
      this.setState({birthdateDayValid: true}, () => this.manageBirthdate());
    }
  }

  validateBirthdateYear = () => {
    let birthdateYear = this.state.birthdateYear;
    console.log(`validateBirthdateYear birthdateYear: ${birthdateYear}`);
    let reg = /^(19|20)\d{2}$/ ;    // 1900-2099

    if(reg.test(birthdateYear) === false ) {
      console.log(`validateBirthdateYear false`);
      this.setState({birthdateYearValid: false}, () => this.manageBirthdate());
    } else {
      console.log(`validateBirthdateYear true`);
      this.setState({birthdateYearValid: true}, () => this.manageBirthdate() );
    }
  }

  manageBirthdate = () => {

    let bday = `${this.state.birthdateMonth}-${this.state.birthdateDay}-${this.state.birthdateYear}`;
    console.log(`manageBirthdate bday: ${bday}`);
    //await this.setState({birthdate: bday});

    let reg = /([1-9]|0[1-9]|1[012])[- \/.]([1-9]|0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/ ;

    if(reg.test(bday) === false ) {
      console.log('manageBirthdate false');
      this.setState({birthdate: bday, birthdateValid: false});
    } else {
      console.log('manageBirthdate true');
      Keyboard.dismiss();
      this.setState({birthdate: bday, birthdateValid: true});
    }
  }

  validateForm() {
    return (
      this.state.childFirstName.length > 1 &&
      this.state.childLastName.length > 1 &&
      this.state.birthdateValid &&
      this.state.gender.length > 1
    );
  }

  handleSubmit = event => {

    this.props.newChild({
      uuid: uuidv4(),
      childFirstName: this.state.childFirstName,
      childLastName: this.state.childLastName,
      birthdate: this.state.birthdate,
      gender: this.state.gender,
    });

    this.props.navigation.navigate('IntroVideo');
  }

  render() {
    console.log(`ChildInfo this.props: ${JSON.stringify(this.props)}`);

    let indexGender = 0;
    const dataGender = [
        { key: indexGender++, section: true, label: 'Gender / Sex' },
        { key: indexGender++, label: 'Girl' },
        { key: indexGender++, label: 'Boy' },
        { key: indexGender++, label: 'Non Binary' },
    ];

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Child First Name</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="grey"
              onChangeText={(childFirstName) => this.setState({childFirstName: childFirstName})}
              value={this.state.childFirstName}
              textContentType={'givenName'}
              maxLength={20}
              ref={(input) => { this.inputChildFirstName = input }}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.inputChildLastName.focus();
              }}
            />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Child Last Name</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="grey"
              textContentType={'familyName'}
              maxLength={20}
              onChangeText={(childLastName) => this.setState({childLastName: childLastName})}
              value={this.state.childLastName}
              ref={(input) => { this.inputChildLastName = input }}
              blurOnSubmit={false}
              onSubmitEditing={() => { this.inputBirthdateMonth.focus() }}
            />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Child Birthdate</Text>
            <View style={styles.rowInputView}>
              <View style={styles.colInputView}>
                <Text>Month</Text>
                <TextInput
                  style={styles.phoneInputField1}
                  underlineColorAndroid="transparent"
                  placeholder="MM"
                  placeholderTextColor="grey"
                  autoCapitalize={'none'}
                  keyboardType={'phone-pad'}
                  maxLength={2}
                  onChangeText={(text) => {
                    this.setState({birthdateMonth: text},
                      () => this.validateBirthdateMonth() );
                  }}
                  value={this.state.birthdateMonth}
                  ref={(input) => { this.inputBirthdateMonth = input }}
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.colInputView}>
                <Text>Day</Text>
                <TextInput
                  style={styles.phoneInputField1}
                  underlineColorAndroid="transparent"
                  placeholder="DD"
                  placeholderTextColor="grey"
                  autoCapitalize={'none'}
                  keyboardType={'phone-pad'}
                  maxLength={2}
                  onChangeText={(text) => {
                    this.setState({birthdateDay: text},
                      () => this.validateBirthdateDay() );
                  }}
                  value={this.state.birthdateDay}
                  ref={(input) => { this.inputBirthdateDay = input }}
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.colInputView}>
                <Text>Year</Text>
                <TextInput
                  style={styles.phoneInputField3}
                  underlineColorAndroid="transparent"
                  placeholder="YYYY"
                  placeholderTextColor="grey"
                  autoCapitalize={'none'}
                  keyboardType={'phone-pad'}
                  maxLength={4}
                  onChangeText={(text) => {
                    this.setState({birthdateYear: text},
                      () => this.validateBirthdateYear() );
                  }}
                  value={this.state.birthdateYear}
                  ref={(input) => { this.inputBirthdateYear = input }}
                />
              </View>
            </View>
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Child Gender</Text>
            <ModalSelector
              data={dataGender}
              initValue="Gender"
              accessible={true}
              ref={selector => { this.selector = selector; }}
              onChange={(option) => {
                this.setState({gender: `${option.label}`});
              }}
              >
                <TextInput
                  style={styles.textInput}
                  editable={false}
                  value={this.state.gender}
                  ref={(input) => { this.inputChildGender = input }}
                />
            </ModalSelector>
          </View>

          <TouchableOpacity
            style={this.validateForm()? styles.bigBut2 : styles.bigBut2disabled }
            disabled={!this.validateForm()}
            onPress={(event) => this.handleSubmit(event, "Next")}
            ref={(input) => { this.nextButton = input }}
          >
            <Text style={styles.bigButTxt}>Next</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}
ChildInfo.propTypes = {
  newChild: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, { newChild })(ChildInfo);
