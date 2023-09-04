import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';

//   interface ISubmitButtonPropsList {
//     onPressCustom: (event: GestureResponderEvent) => void;
//     submitBtnText: string;
//   }
const SubmitButton = ({onPressCustom, submitBtnText}) => {
  return (
    <Pressable onPress={onPressCustom} style={styles.rootContainer}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{submitBtnText}</Text>
      </View>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#4285F4',
    width: '50%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});
