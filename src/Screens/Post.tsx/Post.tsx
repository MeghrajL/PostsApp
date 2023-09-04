import {TextInput, View, Alert, KeyboardAvoidingView} from 'react-native';
// import {styles} from './Task.style';
import React, {useEffect, useState} from 'react';
import SubmitButton from '../../Components/SubmitButton';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import {
  FetchSpecificPost,
  createSpecificPost,
  replaceSpecificPost,
  updateSpecificPost,
} from '../../redux/Actions';
const Post = ({route, navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const id = route.params?.id;
  const userId = route.params?.userId;
  // console.log(userId);

  useEffect(() => {
    if (id) dispatch(FetchSpecificPost(id));
  }, [id]);

  let prevPost = {};
  let tempPost = {};
  if (id) {
    prevPost = useSelector(state => state.PostReducer.post);
    tempPost = prevPost;
  }
  console.log('this is : ', prevPost, tempPost);

  useEffect(() => {
    if (id !== undefined && tempPost) {
      setTitle(tempPost.title);
      setDesc(tempPost.body);
    }
  }, [id, tempPost]);

  function pressHandler() {
    // console.log('press');

    if (id && prevPost.title !== title && prevPost.body !== desc) {
      onReplacePost();
    } else if (id && (prevPost.title !== title || prevPost.body !== desc)) {
      onUpdatePost();
    } else {
      onCreatePost();
    }
  }

  function validateTitle() {
    if (title.trim().length === 0) {
      Alert.alert('You need to enter a title');
      setTitle('');
      return false;
    }
    return true;
  }

  function onCreatePost() {
    // console.log('create');
    let data;
    if (validateTitle() && desc.trim().length !== 0) {
      data = {
        title: title,
        body: desc,
        userId: userId,
      };
      // console.log('create 2');

      dispatch(createSpecificPost(data));
    }
  }

  function onUpdatePost() {
    let data;
    if (prevPost.title !== title) {
      data = {title: title};
    } else if (prevPost.body !== desc) {
      data = {body: desc};
    }
    // console.log('update');

    if (validateTitle()) {
      //   navigation.navigate('Home');
      //   Toast.show('Task Edited', Toast.SHORT);
      dispatch(updateSpecificPost(id, data));
    }
  }

  function onReplacePost() {
    // console.log('upadting', prevPost);
    // console.log('replace');
    const data = {
      id: prevPost?.id,
      title: title,
      body: desc,
      userId: prevPost?.userId,
    };
    // console.log(data);
    if (validateTitle()) {
      //   navigation.navigate('Home');
      //   Toast.show('Task Edited', Toast.SHORT);
      dispatch(replaceSpecificPost(id, data));
    }
  }

  return (
    <KeyboardAvoidingView style={styles.rootContainer}>
      <TextInput
        placeholder="Add Task"
        onChangeText={text => setTitle(text)}
        value={title}
        style={styles.titleStyle}
        maxLength={15}
        placeholderTextColor="#828282"
        autoCorrect={false}
      />

      <TextInput
        placeholder="Add Description"
        onChangeText={text => setDesc(text)}
        value={desc}
        style={styles.descStyle}
        maxLength={100}
        multiline={true}
        textAlignVertical="top"
        placeholderTextColor="#828282"
        autoCorrect={false}
        // numberOfLines={5}
      />

      <SubmitButton
        onPressCustom={() => pressHandler()}
        submitBtnText={'Edit Task'}
      />
    </KeyboardAvoidingView>
  );
};

export default Post;
