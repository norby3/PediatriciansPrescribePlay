import React, {Component} from 'react';
import styles from '../../styles';
import {
//  Keyboard,
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
import ModalSelector from 'react-native-modal-selector';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setClinicLocation } from '../actions/familyActions';
import { TOS } from './TermsOfService.js';
import uuidv4 from 'uuid/v4';

class ClinicLocation extends Component {

  static navigationOptions = {
    title: 'Choose Your Clinic Location',
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      clinicLocation: '',
      agreeTermsOfService: false,
      showTermsOfService: false,
    }
  };

  validateForm() {
    //console.log(`this.state.phone.length == 10 ${this.state.phone.length == 10}`);
    return (
      this.state.clinicLocation.length > 2 &&
      this.state.agreeTermsOfService
    );
  }

  handleCancel = () => {
    this.props.navigation.navigate('Home');
  }

  handleSubmit = event => {
    let nowMillis = Date.now();
    let now = new Date(nowMillis);

    this.props.setClinicLocation({
      clinicLocation: this.state.clinicLocation,
      agreeTermsOfService: this.state.agreeTermsOfService,
      installedAtLocalTimezone: now.toString(),
      installedAtUTC: now.toUTCString(),
      uuid: uuidv4()
    });

    this.props.navigation.navigate('AdultInfo');
  }

  render() {
    //console.log(`ClinicLocation state: ${JSON.stringify(this.state)}`);
    console.log(`ClinicLocation this.props = ${JSON.stringify(this.props)}`);

    let indexGeiPatient = 0;
    const dataGeiPatient = [
        { key: indexGeiPatient++, section: true, label: 'Choose Your Clinic Location' },
        { key: indexGeiPatient++, label: 'Mount Pleasant' },
        { key: indexGeiPatient++, label: 'Pittston' },
        { key: indexGeiPatient++, label: 'Other' },
    ];

    return (

      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='never'
        keyboardDismissMode='on-drag'
      >
        <View style={styles.outerView2}>

          <View style={styles.inputView1}>
            <Text style={styles.formLabel}>Clinic Location</Text>
            <ModalSelector
              data={dataGeiPatient}
              initValue=""
              accessible={true}
              ref={selector => { this.selector = selector; }}
              onChange={(option) => {
                this.setState({clinicLocation: `${option.label}`});
              }}
              >
                <TextInput
                  style={styles.textInput}
                  editable={false}
                  placeholder="tap here to choose a location"
                  value={this.state.clinicLocation} />
            </ModalSelector>
          </View>

          <View style={styles.rowInputView2}>
            <CheckBox
              center
              //title='Agree'
              checked={this.state.agreeTermsOfService}
              onPress={() => {
                this.setState({agreeTermsOfService: !this.state.agreeTermsOfService});
              }}
            />
            <Text>I agree to the </Text>

            <Text
              style={styles.termsOfServiceLinkText}
              onPress={() => {
                this.setState({showTermsOfService: !this.state.showTermsOfService});
              }}
            >
              Terms of Service</Text>
          </View>

          <TouchableOpacity
            style={this.validateForm()? styles.bigBut2 : styles.bigBut2disabled }
            disabled={!this.validateForm()}
            onPress={(event) => this.handleSubmit(event, "Next")}
            ref={(input) => { this.nextButton = input }}
          >
            <Text style={styles.bigButTxt}>Next</Text>
          </TouchableOpacity>

          <Text style={styles.termsOfServiceText}>
            {this.state.showTermsOfService? TOS: ''}
          </Text>

          <TouchableOpacity
            style={[styles.bigBut2, styles.butCancel ]}
            onPress={(event) => this.handleCancel(event, "Cancel")}
          >
            <Text style={styles.bigButTxt}>Cancel</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    );
  }
}

ClinicLocation.propTypes = {
  setClinicLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  family: state.family,
  viewControl: state.viewControl
});

export default connect(mapStateToProps, {setClinicLocation})(ClinicLocation);
