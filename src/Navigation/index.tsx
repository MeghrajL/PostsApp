import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PostsNavigator} from './PostsNavigator';

export const Navigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <PostsNavigator />
    </NavigationContainer>
  );
};
