import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  pickerOption: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },

  optionsWrapper: {
    paddingHorizontal: 20,
  },

  text: {
    fontSize: RFValue(14,680),
    paddingLeft: 17,
  },
});
