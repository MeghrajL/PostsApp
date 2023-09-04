import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {Home, MyPosts, Post} from '../Screens';

const Stack = createNativeStackNavigator();

export const PostsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="MyPosts" component={MyPosts} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};
