import {View} from 'react-native';

export default function App() {
  
  return (
    <View style = {{
      backgroundColor: "white",
      flex:1,
      flexDirection: "row",
      justifyContent : "center",
      alignItems : "center",
      }}>
    <View style={{
      backgroundColor: "grey",
      width:100,
      height:100,
      flexShrink:1,
      }} />
      <View style={{
      backgroundColor: "gold",
      width:100,
      height:100,
      }} />
      <View style={{
      backgroundColor: "green",
      width:100,
      height:100,
      }} />
      <View style={{
      backgroundColor: "red",
      width:100,
      height:100,
      }} />
    </View>
  );
}