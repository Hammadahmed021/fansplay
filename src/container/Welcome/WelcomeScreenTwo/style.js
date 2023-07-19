import {StyleSheet} from 'react-native';
import { colors } from '../../../theme/Color';



export const styles = StyleSheet.create({ 
    container:{
        flex: 2,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        
    },
  bottomContainer:{
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom:70,
    backgroundColor: colors.black, 
  },
 
});