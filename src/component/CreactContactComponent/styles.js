import {StyleSheet} from "react-native";
import Color from "../../assets/themes/Color";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },

    imageView:{
        width:hp('20%'),
        height:hp('20%'),
        borderRadius:100,
        alignSelf: 'center',
    },
    chooseImage:{
        fontSize:RFValue(14,680),
        alignSelf: 'center',
        color:Color.primary,
    }
    
})