import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 42,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    margin:5
  },
  inputContainer: {
    paddingVertical: 10,
  },
  erro:{
    color: 'blue',
    paddingTop: 5,
    fontSize:12
  },
  inputText: {
    flex: 1,
    borderRadius: 10,
  },
});
