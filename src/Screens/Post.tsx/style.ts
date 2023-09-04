import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    // backgroundColor: 'black',
    // alignItems: 'center',
    gap: 32,
    padding: 15,
  },
  titleStyle: {
    color: 'black',
    fontSize: 25,
    padding: 10,
    borderWidth: 1,
    borderColor: '#b1afaf',
    borderRadius: 10,
    marginTop: height < 300 ? 10 : 10,
  },
  descStyle: {
    color: 'black',
    fontSize: 25,
    padding: 10,
    height: '40%',
    // width: '90%',
    borderWidth: 1,
    borderColor: '#b1afaf',
    borderRadius: 10,
  },
});
