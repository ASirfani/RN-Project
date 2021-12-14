import {StyleSheet} from 'react-native';
import Colors from '../../../assets/themes/Color'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({

    wrapper: {
        backgroundColor: "rgba(0,0,0,0.6)",
        flex:1,
        justifyContent :'center',

    }
    ,
    modelView:{
        backgroundColor:'white',
        minHeight:300,
        marginVertical: 10,
        borderRadius:10,
        marginHorizontal: 20,
    },
    headerModal:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        width: '100%',
        padding: 15,
        },
        textModal:{
            fontSize: RFValue(14,680),
    
        }
        ,body:{
            minHeight:300,
            paddingVertical:10,
            paddingHorizontal:20,
        }
        
    
        ,

    termsView:{
        width:5,
        height:5,
        borderRadius:100,
        backgroundColor: Colors.gary,

    },
    footerSeparator:{
        height:0.5,
        backgroundColor:Colors.gary,
    },
    footerItems: {
        width: '100%',
        padding:10
    },
    footer:{
        justifyContent: 'space-evenly',
        paddingVertical:7,
        alignItems:'center',
        flexDirection:'row'
    },
    footerText:{
        fontSize:RFValue(12,680),
        
    }
    

 
});