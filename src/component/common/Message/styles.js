import {StyleSheet} from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  wrapper: {
    
    height: hp('7%'),
    width: wp('50%'),
    paddingHorizontal: 7,
    marginVertical:5,
    borderRadius:10,
    paddingVertical:13,
   
  },
  loadSection:{
    flexDirection: 'row',
  },
  inputContainer: {
    paddingVertical: 10,
  },

});
