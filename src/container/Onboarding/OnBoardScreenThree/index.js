import { View,  Text, FlatList, SafeAreaView , ScrollView  } from 'react-native';
import React , {useState} from 'react'
import OnBoardingHeader from '../../../components/OnBoardingHeader'
import { styles } from './style'
import { colors } from '../../../theme/Color';
import { ageGroup, genders, tagNames } from '../../../utils/localDB';
import OnBoardingTag from '../../../components/OnBoardingTag';
import ButtonComponent from '../../../components/ButtonComponent';

export default function OnBoardScreenThree({navigation}) {
  const [selectedId, setSelectedId] = useState();
  const [ageSelectedId, setAgeSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? colors.primary : colors.lightGrey;
    const color = item.id === selectedId ?  colors.black: colors.white ;

    return (
      <>   
  
         <OnBoardingTag  item={item}  
      textTransform={'capitalize'}
      title={item.name} color={color} bgColor={backgroundColor}
      onPress={() => setSelectedId(item.id)}
      width={'100%'}
      />
   
      </>

    );
  };

  const renderAgeItem = ({item}) => {
    const backgroundColor = item.id === ageSelectedId ? colors.primary : colors.lightGrey;
    const color = item.id === ageSelectedId ?  colors.black: colors.white ;

    return (
      <>   
  
         <OnBoardingTag  item={item}  
      textTransform={'capitalize'}
      title={item.name} color={color} bgColor={backgroundColor}
      onPress={() => setAgeSelectedId(item.id)}
      width={'100%'}
      />
   
      </>

    );
  };

  return (
    <SafeAreaView  style={styles.bgContainer}>
   
      <OnBoardingHeader 
       heading={'What is your gender?'} text={'This helps us find the best content for you. It is private and will not be shared.'}
       padTop={10}
      />
 
    <View style={{paddingHorizontal: 10}}>
     <FlatList
        data={genders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      </View >

      
      <OnBoardingHeader 
       heading={'How old are you?'} text={'This helps us find the best content for you. It is private and will not be shared.'}
       padTop={10}
      />
      <ScrollView nestedScrollEnabled={true}>
<View style={{paddingHorizontal: 10 }}>
<FlatList
        data={ageGroup}
        renderItem={renderAgeItem}
        keyExtractor={item => item.id}
        extraData={ageSelectedId}
      />
      
      </View>
      <View style={{paddingHorizontal: 10 , paddingVertical: 20,}}>
    <ButtonComponent title={'continue'} color={colors.black} texttransform={'capitalize'} textWeight={'500'} 
   onPress={() => {
    navigation.navigate('Signup');
  }}
    />
      </View>
      </ScrollView>
    </SafeAreaView >
  )
}