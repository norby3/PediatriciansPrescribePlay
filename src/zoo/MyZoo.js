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
import {
  getUserData,
  getUserDataCheckNewSession,
}                         from '../shared/UserDataFunctions.js';
import { animalGifs }     from '../shared/AnimalGifs.js';
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get('window');

//export default class MyZoo extends Component {
class MyZoo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zooAnimalCount: 1,
      childFirstName: 'My',
         refreshData: false,
    }
  }

  static navigationOptions = {
         title: null,
    headerLeft: null,
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      console.log('MyZoo didFocus listener started');
      // Call any action
      this.reloadData();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  // async componentWillMount() {
  //   console.log('started componentWillMount');
  //   let zooData = await getZooData();
  //   console.log(`MyZoo zooData: ${JSON.stringify(zooData)}`);
  // }

  async componentWillMount() {
    console.log(`componentWillMount started`);

    let userData = await getUserDataCheckNewSession();

    if(userData.zooAnimalCount){
      this.setState({
        zooAnimalCount: userData.zooAnimalCount,
        zooHasNewAnimal: userData.zooHasNewAnimal,
        childFirstName: userData.childFirstName,
        userData: userData,
      });
    } else {
      this.setState({
        childFirstName: userData.childFirstName
      });
    }
  }

  reloadData = async() => {
    console.log(`MyZoo.reloadData started`);

    let userData = await getUserData();

    await this.setState({
      zooAnimalCount: userData.zooAnimalCount,
      zooHasNewAnimal: userData.zooHasNewAnimal,
      childFirstName: userData.childFirstName,
      userData: userData,
      reloadData: false,
    });
  }

  onPress = () => {
    //console.log('go!');
    try {

      this.setState({refreshData: true},
        () => this.props.navigation.navigate('Activity'));

    } catch (e) {
      alert(e.message);
    }
  }

  getZooAnimals = () => {
    let gifs = [];

    //for(let i=0; i <= 5; i++) {
    for(let i=0; i < this.state.zooAnimalCount; i++) {
      gifs.push(animalGifs[i]);
    }
    return gifs;
  }

  render() {
    console.log(`MyZoo.render state: ${JSON.stringify(this.state)}`);

    return (
      <ScrollView style={{flex:1}}>

        <View style={styles.myZooView}>
          <Text style={styles.coreLoopText1}>
            {this.state.childFirstName? this.state.childFirstName : 'My'} Zoo</Text>

          <Text>&nbsp;</Text>


          <View style={styles.listZooAnimalsView}>

            {this.getZooAnimals()}

          </View>

          <Text>&nbsp;</Text>
          <Text>&nbsp;</Text>
          <Text style={styles.coreLoopText1}>
            Zoo Animals = {this.state.zooAnimalCount}
          </Text>
          <TouchableOpacity
            style={styles.bigBut2}
            onPress={this.onPress}
            >
            <Text style={styles.bigButTxt}> Add Animal </Text>
          </TouchableOpacity>
          <Text>&nbsp;</Text>
          <Text>&nbsp;</Text>


        </View>

      </ScrollView>
    );
  }
}
export default withNavigation(MyZoo);
