import {StyleSheet} from 'react-native';
import Color from '../../assets/themes/Color';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  logoImage:{
    height: hp('30%'),
    width: wp('30%'),
    alignSelf:'center',
    marginTop: 50
  },
  title:{
    fontSize :RFPercentage(3),
    textAlign: 'center',
    paddingTop:20,
    fontWeight:'500'
  },
  subTitle:{
    fontSize : RFValue(14,680),
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
    fontSize : RFValue(14,680),
  },
  infoText:{
    fontSize : RFValue(14,680),
  },

  showIcon:{
    fontSize : RFValue(14,680),

  },
 
  
  
});
