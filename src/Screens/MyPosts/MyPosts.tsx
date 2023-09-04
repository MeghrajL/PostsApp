import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FetchSpecificUserPostsList,
  deleteSpecificPost,
} from '../../redux/Actions';
import {ListItem} from '../../Components/ListItem';
import {FloatingButton} from '../../Components/FloatingButton';

function MyPosts({navigation}) {
  const [userId, setUserId] = useState('');
  const posts = useSelector(state => state.PostReducer.userPosts);
  const dispatch = useDispatch();
  function loadUserPosts() {
    dispatch(FetchSpecificUserPostsList(userId));
    // console.log(posts);
  }

  function onEditPost(id: string) {
    navigation.navigate('Post', {id});
  }

  function onAddTaskNavigation() {
    navigation.navigate('Post', {userId});
  }

  function onDeletePress(id) {
    dispatch(deleteSpecificPost(id));
  }

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={styles.input}
        onChangeText={setUserId}
        value={userId}
        placeholder="enter your userId"
        keyboardType="numeric"
      />
      <Button title="load" onPress={loadUserPosts} />
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <ListItem
            item={item}
            onEditTask={() => onEditPost(item.id)}
            onDeletePress={() => onDeletePress(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <FloatingButton onAddTaskNavigation={onAddTaskNavigation} />
    </View>
  );
}
export default MyPosts;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
