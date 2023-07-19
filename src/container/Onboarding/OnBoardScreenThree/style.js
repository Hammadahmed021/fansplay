import {StyleSheet} from 'react-native';
import { colors } from '../../../theme/Color';

export const styles = StyleSheet.create({ 
    bgContainer:{
        flex:1,
        backgroundColor: colors.black,
    },
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      secondContainer:{
        width:'100%',
      }

});