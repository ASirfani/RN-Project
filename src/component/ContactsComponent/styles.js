import {StyleSheet} from "react-native";
import colors from '../../assets/themes/Color';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
    flexGrow: 1,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  name: {fontSize:RFValue(14,680)},
  phoneNumber: {
    opacity: 0.6,
    fontSize: RFValue(14,680),
    paddingVertical: 5,
  },

  floatingActionButton: {
    backgroundColor: 'red',
    height:hp('7%'), 
    width:hp('7%'),
    position: 'absolute',
    bottom: hp('5%'),
    right: hp('4%'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },

  actionText: {
    textAlign: 'center',
    maxWidth: '70',
    paddingTop: '5',
    fontSize: RFValue(14,680),
    color: colors.white,
  },
  actionTextStyle: {
    padding: '40',
  },
});
