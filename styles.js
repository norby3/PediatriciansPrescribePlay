import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const splitPanelHeight = height * 0.40;
const coverPadding = width * 0.10;


export default StyleSheet.create({
  spinnerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    backgroundColor: 'white',
  },

  myZooView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
  },
  listZooAnimalsView: {
    marginTop: 10,
  },
  zooImage: {
    marginTop: 10,
  },

  activityView: {

  },
  miniBreakView: {

  },
  headerText: {
    fontSize: 36,

  },
  button: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 5,

  },
  // Activity.js
  containerActivity: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    //alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
  },
  videoView: {
    width: width,
    height: splitPanelHeight,
    //backgroundColor: 'skyblue',
  },
  videoScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cameraView: {
    //marginTop: 10,
    width: width,
    height: splitPanelHeight,
    backgroundColor: 'steelblue',
  },

  // MiniBreak.js
  breakTimerView: {
    width: width,
    height: splitPanelHeight,
    //backgroundColor: 'skyblue',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifRevealView: {
    width: width,
    height: splitPanelHeight,
    //backgroundColor: 'steelblue',
    marginTop: 10,
  },
  coverView: {
    position: 'absolute',
    top: coverPadding,
    left: coverPadding,
    bottom: coverPadding,
    right: coverPadding,
    backgroundColor: 'pink',
  },
  bigText: {
    fontSize: 96,
    color: 'orange',
    fontWeight: 'bold',
  },


  // begin styles from 'geisinger' app
  outerView: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    //backgroundColor: 'bisque',
  },
  outerView2: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    //justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    //backgroundColor: 'bisque',
  },
  outerView3: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    //backgroundColor: 'bisque',
  },


  headerView: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bodyView: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    minHeight: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  bodyView2: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //width: '100%',
    //minHeight: 150,
    marginTop: 20,
    marginBottom: 20,
    //backgroundColor: 'cornflowerblue',
  },
  bodyView3: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
    //width: width,
    //minHeight: height * 0.4,
  },

  contentView: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  contentView2: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    margin: 20,
  },

  buttonsView2: {
    flex: 1,
    width: '98%',
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },

  buttonsView: {
    //width: '98%',
    backgroundColor: 'white',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  buttonsView3: {
    flex: 0,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
    //backgroundColor: 'coral',
    marginTop: 10,
  },
  bigBut2: {
    backgroundColor: 'rgb(2,161,226)',    // '#02a1e2'
    width: 150,
    //height: 120,
    borderRadius: 5,
    borderColor: 'rgb(2,161,226)',
    borderWidth: 3,
    marginTop: 10,
  },
  bigBut2disabled: {
    backgroundColor: 'rgba(2,161,226,0.2)',    // '#02a1e2'
    width: 150,
    //height: 120,
    borderRadius: 5,
    borderColor: 'rgba(2,161,226,0.2)',
    borderWidth: 3,
    marginTop: 10,

  },
  bigButTxt: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bigbut: {
    backgroundColor: '#000080',
    //backgroundColor: '#663399',
    flex: 0,
    width: 150,
    height: 120,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  bigbutDisabled: {
    backgroundColor: '#02a1e250',
    flex: 0,
    width: 150,
    height: 120,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  butC1: {
    backgroundColor: '#000080',
  },
  butC2: {
    backgroundColor: '#02a1e2',
  },
  butCancel: {
    backgroundColor: 'silver',
  },
  inputView1: {
    //backgroundColor: 'powderblue',
    marginTop: 10,
    //marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: '90%',
  },
  formLabel: {
    width: '100%',
    //fontWeight: 'bold',
    //marginLeft: 20,
    fontSize: 20,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    justifyContent: "flex-start",
    fontSize: 24,
  },
  label2: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,

  },

  viewVideo: {

  },

  // VideoPlayer.js
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  playerBut: {
    flex: 0,
    //width: 150,
    //height: 80,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(255,140,0)',    // darkorange = rgb(255,140,0)
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 10,
  },
  disabledLook: {
    backgroundColor: 'rgba(255,140,0,0.5)',
  },

  coreLoopText1: {
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
  },
  coreLoopTextPoints: {
    fontSize: 96,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'red',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 10,
    overflow: "hidden",
    textAlign: 'center',
    padding: 20,
  },
  playerScoreRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: width,
    margin: 20,
    //backgroundColor: 'cornflowerblue',
  },
  playerScoreName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'darkorange',
    borderWidth: 1,
    borderColor: 'darkorange',
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
  activityIndicator: {
    padding: 10,
  },
  rewardsGifView: {
    width: width,
    height: 300,
  },
  videoTileBut: {
    width: width,
    margin: 10,
    backgroundColor: 'cornflowerblue',
  },
  videoTileImg: {
    width: width-20,
  },
  rowInputView: {
    flexDirection: 'row',
    //backgroundColor: 'yellow',
  },
  rowInputView2: {
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  colInputView: {
    flexDirection: 'column',
    //backgroundColor: 'powderblue',
  },
  phoneInputField1: {
    width: 70,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
    //backgroundColor: 'powderblue',
    marginRight: 10,
  },
  phoneInputField2: {
    width: 70,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
    //backgroundColor: 'skyblue',
    marginRight: 10,
  },
  phoneInputField3: {
    width: 90,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
    //backgroundColor: 'steelblue',

  },
  defaultText: {
    padding: 10,
    fontSize: 24,
    //backgroundColor: 'orange',
  },
  devOnlyText: {
    fontSize: 12,
    color: 'gray',
  },
  devOnlyText2: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10,
  },

  wideButton: {
    marginVertical: 20,
    width: width,
    height: height * 0.25,

    backgroundColor: 'skyblue',
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  termsOfServiceText: {
    fontSize: 10,
    //backgroundColor: 'pink',
    //margin: 10,
    marginTop: 30,
  },
  termsOfServiceLinkText: {
    textDecorationLine: 'underline',
  }

});
