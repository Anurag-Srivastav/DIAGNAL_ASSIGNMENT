import { StyleSheet } from 'react-native';
import { normalize, vh, vw } from '../../utils/dimensions';
import { COLORS } from '../../utils/Colors';

/**
 * Styles for the Home Screen
 */

export default StyleSheet.create({
    emptyContainer :{
        alignItems: 'center', 
        marginTop: '60%',
    },
    emptyImage :{
        width: vh(25), 
        height: vh(25) 
    },
    emptyText : {
        fontWeight: '600', 
        color: COLORS.white, 
        fontSize: 20, 
        marginVertical: 10, 
        textAlign: 'center', 
        width: '50%'
    },
    container : {
        flex: 1, 
        backgroundColor: COLORS.black,
    },
    mainView :{
        flex: 1,
        marginHorizontal: vw(15)
    },
    flatListContainer: {
        marginTop: vh(70),
        paddingBottom: vh(60)
    }
});
