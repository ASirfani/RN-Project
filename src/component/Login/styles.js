import {StyleSheet} from 'react-native';
import Color from '../../assets/themes/Color';
const height = '40%';
const width = '50%';
export default StyleSheet.create({
  logoImage:{
    height: 150,
    width: 150,
    alignSelf:'center',
    marginTop: 50
  },
  title:{
    fontSize :21,
    textAlign: 'center',
    paddingTop:20,
    fontWeight:'500'
  },
  subTitle:{
    fontSize :17,
    textAlign: 'center',
    paddingVertical:20,
    fontWeight:'500'
  },
  form:{
    paddingTop:20,
  },
  createSection:{
    flexDirection: 'row'
  },
  linkBtn:{
    paddingLeft:17,
    color: Color.primary,
    fontSize: 16
  },
  infoText:{
    fontSize:17
  }
  
});
