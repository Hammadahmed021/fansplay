import { View,  Text, FlatList, SafeAreaView , ScrollView } from 'react-native';
import React , {useState} from 'react'
import OnBoardingHeader from '../../../components/OnBoardingHeader'
import { styles } from './style'
import { colors } from '../../../theme/Color';
import { tagNames } from '../../../utils/localDB';
import OnBoardingTag from '../../../components/OnBoardingTag';





export default function OnBoardScreenOne({navigation}) {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? colors.primary : colors.lightGrey;
    const color = item.id === selectedId ?  colors.black : colors.white;

    return (
      <>   
  
         <OnBoardingTag  item={item}  
      textTransform={'capitalize'}
      title={item.name} color={color} bgColor={backgroundColor}
      onPress={() => setSelectedId(item.id)}
      />
   
      </>

    );
  };

  return (
    <SafeAreaView  style={styles.bgContainer}>

    
      <OnBoardingHeader 
       heading={'Set Your Goal'} text={'What do you want to do Today!'} doneText={'DONE'} onPress={() => {
        navigation.navigate('OnBoardScreenTwo')
    
      }}
      />
 
    
     <FlatList
        data={tagNames}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        contentContainerStyle={styles.list}                
      />
    
    
    </SafeAreaView >
  )
}



