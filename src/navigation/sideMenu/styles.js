import {StyleSheet} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
  logoImage:{
    height: hp('25%'),
    width: hp('25%'),
    alignSelf:'center',
    marginTop: 50
  },
  item:{
    flexDirection: 'row',
    alignItems: "center",
    
  },
  itemText:{
    fontSize:RFValue(14,680),
    paddingVertical:7,
    paddingLeft:10
  }
});
