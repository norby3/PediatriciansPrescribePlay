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
import { newAdult } from '../actions/familyActions';
import uuidv4 from 'uuid/v4';

class AdultInfo extends Component {
  static navigationOptions = {
    title: 'Parent/Adult Information',
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      relationship: '',
      email: '',
      emailValid: '',
    }
  }

  validateEmail = (email) => {
    this.setState({email:email});

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    // if(re.test(String(email).toLowerCase())) {
    //   Keyboard.dismiss();
    //   return true;
    // } else {
    //   return false;
    // }

  }

  validateForm() {
    return (
      this.state.firstName.length > 1 &&
      this.state.lastName.length > 1 &&
      this.state.relationship.length > 1
      //this.state.email.length > 6
    );
  }


  handleSubmit = event => {

    let aem = this.state.email.length > 0 ? this.state.email : 'unknown';

    this.props.newAdult({
      uuid: uuidv4(),
      adultFirstName: this.state.firstName,
      adultLastName: this.state.lastName,
      adultEmail: aem,
      adultChildRelationship: this.state.relationship,
    });

    this.props.navigation.navigate('ChildInfo');
  }

  render() {
    console.log(`AdultInfo this.props: ${JSON.stringify(this.props)}`);

    let indexRelationship = 0;
    const dataRelationship = [
        { key: indexRelationship++, section: true, label: 'Relationship to Child' },
        { key: indexRelationship++, label: 'Mom / Step Mom' },
        { key: indexRelationship++, label: 'Dad / Step Dad' },
        { key: indexRelationship++, label: 'Grandmother' },
        { key: indexRelationship++, label: 'Grandfather' },
        { key: indexRelationship++, label: 'Other Relative' },
        { key: indexRelationship++, label: 'Foster Parent' },
        { key: indexRelationship++, label: 'Other' },
    ];

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='never'
        keyboardDismissMode='on-drag'
      >
        <View style={styles.outerView2}>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Parent First Name</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="grey"
                textContentType={'givenName'}
                onChangeText={(firstName) => {
                  this.setState({firstName: firstName});
                }}
                value={this.state.firstName}
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
            <Text style={styles.formLabel}>Parent Last Name</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="grey"
              textContentType={'familyName'}
              onChangeText={(lastName) => {
                this.setState({lastName: lastName});
              }}
              value={this.state.lastName}
              maxLength = {20}
              ref={(input) => {
                this.inputFieldParentLastName = input;
              }}
              onSubmitEditing={() => {
                this.inputFieldParentEmail.focus();
              }}
            />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Parent Email</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="grey"
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}

                onChangeText={(text) => {
                  this.setState({email: text});
                }}

                value={this.state.email}
                ref={(input) => {
                  this.inputFieldParentEmail = input;
                }}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
          </View>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Relationship to Child</Text>
            <ModalSelector
              data={dataRelationship}
              initValue="Relationship"
              accessible={true}
              ref={selector => {
                this.selector = selector;
              }}
              onChange={(option) => {
                this.setState({relationship: `${option.label}`});
              }}
              >
                <TextInput
                  style={styles.textInput}
                  editable={false}
                  placeholder="Relationship to Child"
                  value={this.state.relationship} />
            </ModalSelector>
          </View>

          <TouchableOpacity
            style={this.validateForm()? styles.bigBut2 : styles.bigBut2disabled }
            onPress={this._gotoNextScreen}
            disabled={!this.validateForm()}
            onPress={(event) => {
              this.handleSubmit(event, "Next");
            }}
            ref={(input) => {
              this.nextButton = input;
            }}
          >
            <Text style={styles.bigButTxt}>Next</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

AdultInfo.propTypes = {
  newAdult: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl,
  players: state.players,
  sessions: state.sessions,
});

export default connect(mapStateToProps, { newAdult })(AdultInfo);
