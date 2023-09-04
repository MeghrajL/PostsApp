import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Icon.loadFont();
// interface FloatingButtonPropList {
//   navigateToTaskScreen: (event: GestureResponderEvent) => void;
// }
export const FloatingButton = ({onAddTaskNavigation}) => {
  return (
    <Pressable style={styles.addTask} onPress={onAddTaskNavigation}>
      {/* <View style={styles.addTask}> */}
      {/* <Text>+</Text> */}
      <Icon name="add-outline" size={40} color={'white'} />
      {/* </View> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addTask: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4285F4',
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});
