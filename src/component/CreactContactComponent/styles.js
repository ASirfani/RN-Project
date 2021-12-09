import {StyleSheet} from "react-native";
import Color from "../../assets/themes/Color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },

    imageView:{
        width:150,
        height:150,
        borderRadius:100,
        alignSelf: 'center',
    },
    chooseImage:{
        alignSelf: 'center',
        color:Color.primary,
    }
    
})