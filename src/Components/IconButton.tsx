import {
  Text,
  GestureResponderEvent,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface IIconButtonProps {
  icon: string;
  color: string;
  onPressCustom: (event: GestureResponderEvent) => void;
}
export default function IconButton({
  icon,
  color,
  onPressCustom,
}: IIconButtonProps) {
  return (
    <Pressable
      onPress={onPressCustom}
      style={({pressed}) => pressed && styles.pressed}>
      <Icon name={icon} size={28} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
