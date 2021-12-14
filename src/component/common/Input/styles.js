import {StyleSheet} from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: hp('6%'),
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    margin:5
  },
  inputContainer: {
    paddingVertical: 10,
  },
  error:{
    color: 'blue',
    paddingTop: 5,
    fontSize:RFValue(14,750)
  },
  inputText: {
    flex: 1,
    borderRadius: 10,
  },
  labelText:{

    fontSize:RFValue(14,750),
  }
});
