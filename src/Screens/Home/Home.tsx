import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FetchPostsList} from '../../redux/Actions';
const Home = ({navigation}) => {
  useEffect(() => {
    dispatch(FetchPostsList());
  });
  const posts = useSelector(state => state.PostReducer);
  const dispatch = useDispatch();

  function LogData() {
    // dispatch(FetchPostsList());
    console.log(posts);
  }

  function NavigateToMyPosts() {
    navigation.navigate('MyPosts');
  }
  return (
    <View>
      <Button title="My posts" onPress={NavigateToMyPosts} />
      <FlatList
        data={posts.postsList}
        renderItem={({item}) => (
          <View style={styles.itemStyle}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: '#a7a3f0',
    margin: 10,
    borderRadius: 25,
    padding: 20,
  },
});
