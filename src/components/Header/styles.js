import { StyleSheet } from 'react-native';
import { normalize, vh, vw } from '../../utils/dimensions';
import { FONTS } from '../../assets/Fonts';

/**
 * Styles for the Home Header
 */

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex:1,
        position:'absolute',
        alignItems: 'center',
        height: vh(70),
        width : '100%'
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop : vw(-20)
    },
    textInput : {
        color: 'white', 
        fontSize: normalize(22), 
        marginLeft: vw(14),
        width: '80%',
        fontWeight: '300',
        fontFamily: FONTS.TitilliumRegular,
    },
    backIcon:{
        width: vw(18), 
        height: vh(18),
    },
    searchIcon: {
        width: vh(25), 
        height: vh(25) ,
        marginTop: vw(-20),
        alignSelf: 'center'
    }
});
