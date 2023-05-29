import { Dimensions, StyleSheet } from 'react-native';
import { normalize, vh, vw } from '../../utils/dimensions';
import { FONTS } from '../../assets/Fonts';
import { COLORS } from '../../utils/Colors';

/**
 * Styles for the Movie Card
 */

export default StyleSheet.create({
  card : {
    marginRight: vw(10),
    marginBottom: vh(30),
  },
  poster : {
    width: Dimensions.get('screen').width / 3.5, 
    height: vh(180), 
    marginBottom: vh(4)
  },
  title :{
    color: COLORS.white, 
    fontSize: normalize(14), 
    maxWidth: vw(110) ,
    fontFamily : FONTS.TitilliumLight
  }
});
