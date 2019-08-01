import React, {Component} from 'react';
import styles from '../styles';

import {
  Platform, ScrollView, StyleSheet, Text, TextInput,
  TouchableOpacity, View
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFamilyProfile } from './actions/familyActions';
import uuidv4 from 'uuid/v4';
import { Dimensions }       from 'react-native';
const { width, height } = Dimensions.get('window');
import { TOS } from './TermsOfService.js';

class FamilyProfile extends Component {
  static navigationOptions = {
    title: 'Family Profile',
  };

  constructor(props) {
    super(props);

    this.state = {
      adultFirstName: '',
      adultLastName: '',
      childFirstName: '',
      childLastName: '',
      hospital: '',
      doctor: '',
      uudi: '',
      showTermsOfService: false,
    }
  };

  componentDidMount() {
    console.log(`start componentDidMount viewControl.familyProfileComplete = ${this.props.viewControl.familyProfileComplete}`);
    if(this.props.viewControl.familyProfileComplete) {
      this.setState({
        adultFirstName: this.props.family.adultFirstName,
        adultLastName: this.props.family.adultLastName,
        childFirstName: this.props.family.childFirstName,
        childLastName: this.props.family.childLastName,
        hospital: this.props.family.hospital,
        doctor: this.props.family.doctor,
        uuid: this.props.family.uuid,
      });
    }
  };

  validateForm() {
    return (
      this.state.adultFirstName.length > 1 &&
      this.state.adultLastName.length > 1 &&
      this.state.childFirstName.length > 1 &&
      this.state.childLastName.length > 1
    );
  }

  handleSubmit = (event, act) => {
    this.props.createFamilyProfile({
      uuid: uuidv4(),
      adultFirstName: this.state.adultFirstName,
      adultLastName: this.state.adultLastName,
      childFirstName: this.state.childFirstName,
      childLastName: this.state.childLastName,
      hospital: this.state.hospital,
      doctor: this.state.doctor,
    });

    this.props.navigation.navigate('Home');
  }


  render() {
    console.log(`FamilyProfile.js this.props: ${JSON.stringify(this.props)}`);
    console.log(`FamilyProfile.js this.state: ${JSON.stringify(this.state)}`);

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.outerView2}>

          <Text>
            This profile is not mandatory.  You can play the games
            without submitting your personal information.
          </Text>
          <Text> </Text>
          <Text>
            OPTIONAL: If you would like to share your child's
            exercise information with your doctor, complete this form.
          </Text>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Parent / Guardian First Name</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="grey"
                textContentType={'givenName'}
                onChangeText={(adultFirstName) => {
                  this.setState({adultFirstName: adultFirstName});
                }}
                value={this.state.adultFirstName}
                maxLength = {20}
                ref={(input) => {
                  this.inputFieldParentFirstName = input;
                }}
                onSubmitEditing={() => {
                  this.inputFieldParentLastName.focus();
                }}
              />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Parent / Guardian Last Name</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="grey"
              textContentType={'familyName'}
              onChangeText={(adultLastName) => {
                this.setState({adultLastName: adultLastName});
              }}
              value={this.state.adultLastName}
              maxLength = {20}
              ref={(input) => {
                this.inputFieldParentLastName = input;
              }}
            />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Child First Name</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="grey"
              onChangeText={(childFirstName) => {
                this.setState({childFirstName: childFirstName});
              }}
              value={this.state.childFirstName}
              textContentType={'givenName'}
              maxLength={20}
              ref={(input) => { this.inputChildFirstName = input; }}
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
              onChangeText={(childLastName) => {
                this.setState({childLastName: childLastName});
              }}
              value={this.state.childLastName}
              ref={(input) => {
                this.inputChildLastName = input;
              }}
            />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Hospital / Health System</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={(hospital) => {
                this.setState({hospital: hospital});
              }}
              value={this.state.hospital}
              maxLength={25}
            />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Doctor</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              maxLength={20}
              onChangeText={(doctor) => {
                this.setState({doctor: doctor});
              }}
              value={this.state.doctor}
            />
          </View>

          <Text> </Text>
          <Text>By creating a profile, you agree to the </Text>
          <Text
            style={styles.termsOfServiceLinkText}
            onPress={() => {
              this.setState({showTermsOfService: !this.state.showTermsOfService});
            }}
          >
            Terms of Service</Text>
          <Text> </Text>

          <TouchableOpacity
            style={this.validateForm()? styles.bigBut2 : styles.bigBut2disabled }
            disabled={!this.validateForm()}
            onPress={(event) => {
              this.handleSubmit(event, "Save");
            }}
          >
            <Text style={styles.bigButTxt}>Save</Text>
          </TouchableOpacity>

          <Text> </Text>

          <Text style={styles.termsOfServiceText}>
            {this.state.showTermsOfService? TOS: ''}
          </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>

        </View>
      </ScrollView>
    );
  }
}

FamilyProfile.propTypes = {
  createFamilyProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
//  sessions: state.sessions,
//  bonusSessions: state.bonusSessions,
});

export default connect(mapStateToProps, {createFamilyProfile})(FamilyProfile);
