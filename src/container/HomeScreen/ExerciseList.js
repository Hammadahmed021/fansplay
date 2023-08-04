import { FlatList} from 'react-native'
import React from 'react'
import ExerciseComponent from '../../components/ExerciseComponent';
import { exerciseListing } from '../../utils/localDB';
import { styles } from './style';

const renderItem = ({item}) => {
    // const backgroundColor = item.id === selectedId ? colors.primary : colors.lightGrey;
    // const color = item.id === selectedId ?  colors.black : colors.white;

    return (
      <>   
  <ExerciseComponent item={item} exerciseTitle={item.name}   icon={item.iconUrl} imgSource={item.imageUrl} />
           
      </>

    );
  };

export default function ExerciseList() {
  return (
    <FlatList
        data={exerciseListing}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData={selectedId}
        contentContainerStyle={styles.list}   
        horizontal             
      />
  )
}