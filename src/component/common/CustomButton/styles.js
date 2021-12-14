import {StyleSheet} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  wrapper: {
    
    height: hp('6%'),
    justifyContent: 'space-evenly',
    paddingHorizontal: 5,
    marginVertical:5,
    alignItems: 'center',
    borderRadius:20,
        
  },
  loadSection:{
    flexDirection: 'row',
    


  },
  inputContainer: {
    paddingVertical: 10,
  } 

});
