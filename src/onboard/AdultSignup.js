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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCellphoneAndPassword } from '../actions/familyActions';

class AdultSignup extends Component {
  static navigationOptions = {
    title: 'Parent/Adult Sign Up',
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
                phone: '',
               phone0: '+1',
               phone1: '',
               phone2: '',
               phone3: '',
       formattedPhone: '',
             password: '',
      confirmPassword: '',
    }
  }
  validatePhoneField1 = (phone1) => {
    //console.log(`validatePhoneField1 phone1: ${phone1}`);
    this.setState({phone1: phone1}, () => this.validatePhone());
    let reg = /\d\d\d/ ;
    if(reg.test(phone1) === false ) {
      return false;
    } else {
      this.phoneInputField2.focus();
      return true;
    }
  }
  validatePhoneField2 = (phone2) => {
    //console.log(`validatePhoneField2 phone2: ${phone2}`);
    this.setState({phone2: phone2}, () => this.validatePhone());
    let reg = /\d\d\d/ ;
    if(reg.test(phone2) === false ) {
      return false;
    } else {
      this.phoneInputField3.focus();
      return true;
    }
  }
  validatePhoneField3 = (phone3) => {
    //console.log(`validatePhoneField3 phone3: ${phone3}`);
    this.setState({phone3: phone3}, () => this.validatePhone());
    let reg = /\d\d\d\d/ ;
    if(reg.test(phone3) === false ) {
      return false;
    } else {
      this.inputFieldPassword.focus();
      return true;
    }
  }

  validatePhone = () => {
    let formattedPhone = `+1 (${this.state.phone1}) ${this.state.phone2} - ${this.state.phone3}`;
    let phone = `${this.state.phone0}${this.state.phone1}${this.state.phone2}${this.state.phone3}`;
    this.setState({formattedPhone: formattedPhone, phone: phone});

    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ;
    if(reg.test(phone) === false)
    {
      //console.log("Phone is Not Correct");
      this.setState({phone:phone});
      return false;
    }
    else {
      this.setState({phone:phone});
      //console.log("Phone is Correct");
      return true;
    }
  }

  validateForm() {
    //console.log(`this.state.phone.length == 10 ${this.state.phone.length == 10}`);
    return (
      this.state.phone.length > 11 &&
      this.state.password.length > 7 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleSubmit = event => {
    this.props.setCellphoneAndPassword({
      cellphone: this.state.phone,
      password: this.state.password
    });

    this.props.navigation.navigate('AdultInfo');
  }

  render() {
    console.log(`AdultSignup this.props: ${JSON.stringify(this.props)}`);

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>

          <View style={styles.inputView1}>

            <Text style={styles.formLabel}>Cellphone Number</Text>

            <View style={styles.rowInputView}>
              <Text style={styles.defaultText}>{this.state.phone0}</Text>
              <TextInput
                style={styles.phoneInputField1}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="grey"
                autoCapitalize={'none'}
                keyboardType={'phone-pad'}
                maxLength = {3}
                onChangeText={(text) => this.validatePhoneField1(text)}
                value={this.state.phone1}
                ref={(input) => { this.phoneInputField1 = input }}
                blurOnSubmit={false}
              />
              <TextInput
                  style={styles.phoneInputField2}
                  underlineColorAndroid="transparent"
                  placeholder=""
                  placeholderTextColor="grey"
                  autoCapitalize={'none'}
                  keyboardType={'phone-pad'}
                  maxLength = {3}
                  onChangeText={(text) => this.validatePhoneField2(text)}
                  value={this.state.phone2}
                  ref={(input) => { this.phoneInputField2 = input }}
                  blurOnSubmit={false}
                />

              <TextInput
                  style={styles.phoneInputField3}
                  underlineColorAndroid="transparent"
                  placeholder=""
                  placeholderTextColor="grey"
                  autoCapitalize={'none'}
                  keyboardType={'phone-pad'}
                  maxLength = {4}
                  onChangeText={(text) => this.validatePhoneField3(text)}
                  value={this.state.phone3}
                  ref={(input) => { this.phoneInputField3 = input }}
                  blurOnSubmit={false}
                />

            </View>

          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Password (min 8)</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Enter a password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              autoComplete="password"
              autoCapitalize="none"
              maxLength={12}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              ref={(input) => { this.inputFieldPassword = input }}
              onSubmitEditing={() => { this.inputFieldConfirmPassword.focus() }}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Re-enter password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              autoComplete="password"
              autoCapitalize="none"
              maxLength={12}
              onChangeText={(confirmPassword) => this.setState({confirmPassword})}
              value={this.state.confirmPassword}
              ref={(input) => { this.inputFieldConfirmPassword = input }}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                Keyboard.dismiss();
                this.nextButton.focus();
              }}
            />
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
AdultSignup.propTypes = {
  setCellphoneAndPassword: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, {setCellphoneAndPassword})(AdultSignup);
