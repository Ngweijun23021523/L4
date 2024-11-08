import React from 'react';
import {View,Text,StyleSheet} from "react-native";


//====================Exercise1==============
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text style={{fontSize:24}}>RP Values</Text>
//         <Text style={{color :'green'}}>Excellence</Text>
//         <Text style={{ backgroundColor:'yellow'}}>Customer-Centric</Text>
//         <Text style={{fontStyle :'italic'}}>Integrity</Text>
//         <Text style={{textAlign :'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor :'black', color:'white'}}>Enterprising</Text>
//       </View>
//   )
// }
// export default Exercise1;

//===============Exercise2================
// const Ex2 = StyleSheet.create(
//     {
//       greenBox:{
//         width:100,
//         height:100,
//         marginTop:10,
//         backgroundColor:'green',
//         borderWidth:1
//       },
//       boxText:{
//         textAlign:'center',
//         color:'white',
//       },
//       title:{
//           fontWeight:'bold',
//       },
//     }
// )
// const Exercise2 =() => {
//   return (
//       <View>
//         <View style={Ex2.greenBox}>
//           <Text style={[Ex2.boxText, Ex2.title]}>
//             Who we are
//           </Text>
//         </View>
//         <View style={Ex2.greenBox}>
//           <Text style={Ex2.boxText}>
//             Our People
//           </Text>
//         </View>
//         <View  style={Ex2.greenBox}>
//           <Text style={Ex2.boxText}>
//             Our Campus
//           </Text>
//         </View>
//       </View>
//   );
// };
// export default Exercise2;

// //===============Exercise3A=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA'
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//         <View >
//           <Text style={[Ex3.child, {backgroundColor:'powderblue'} ]}>
//             Child One
//           </Text>
//         </View>
//         <View >
//           <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
//             Child Two
//           </Text>
//         </View>
//         <View >
//           <Text style={[Ex3.child, {backgroundColor:'steelblue'} ]}>
//             Child Three
//           </Text>
//         </View>
//       </View>
//   )
// }
// export default Exercise3;


//===============Exercise3B=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA',
//     flex:1
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex:1,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//           <Text style={[Ex3.child, {backgroundColor:'powderblue'} ]}>
//             Child One
//           </Text>
//           <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
//             Child Two
//           </Text>
//           <Text style={[Ex3.child, {backgroundColor:'steelblue'} ]}>
//             Child Three
//           </Text>
//       </View>
//   )
// }
// export default Exercise3;

//===============Exercise3C=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA',
//     flex:1
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex:1,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//         <Text style={[Ex3.child, {backgroundColor:'powderblue', maxWidth:90} ]}>
//           Child One
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
//           Child Two
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'steelblue', maxHeight:120} ]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Exercise3;


// //===============Exercise3D=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA'
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//           <Text style={[Ex3.child, {backgroundColor:'powderblue',flex:1} ]}>
//             Child One
//           </Text>
//           <Text style={[Ex3.child, {backgroundColor:'skyblue',flex:2} ]}>
//             Child Two
//           </Text>
//           <Text style={[Ex3.child, {backgroundColor:'steelblue',flex:3} ]}>
//             Child Three
//           </Text>
//
//       </View>
//   )
// }
// export default Exercise3;

// //===============Exercise3E=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA',
//     flex:1,
//     justifyContent:'flex-start'
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//
//         <Text style={[Ex3.child, {backgroundColor:'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
//           Child Two
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'steelblue'} ]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Exercise3;

// //===============Exercise3E=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA',
//     flex:1,
//     justifyContent:'flex-end'
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//
//         <Text style={[Ex3.child, {backgroundColor:'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
//           Child Two
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'steelblue'} ]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Exercise3;

// //===============Exercise3E=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA',
//     flex:1,
//     justifyContent:'space-around'
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//
//         <Text style={[Ex3.child, {backgroundColor:'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
//           Child Two
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'steelblue'} ]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Exercise3;

// //===============Exercise3E=================
// const Ex3 = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     borderWidth: 5,
//     backgroundColor: '#F5fcff',
//     borderColor:'#0099AA',
//     flex:1,
//     justifyContent:'space-between'
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
// const Exercise3 =() =>{
//   return(
//       <View style={Ex3.parent}>
//
//         <Text style={[Ex3.child, {backgroundColor:'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
//           Child Two
//         </Text>
//         <Text style={[Ex3.child, {backgroundColor:'steelblue'} ]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Exercise3;

// //===============Exercise4=================
const Ex3 = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    borderWidth: 5,
    backgroundColor: 'whitesmoke',
    marginTop:30,
    flex:1,
    justifyContent:'space-between',
      alignItems:'center',
  },
  child: {
        width:80,
        height:80,
        marginTop:10,
        backgroundColor:'green',
        borderWidth:1
  },
});
const Exercise3 =() =>{
  return(
      <View style={Ex3.parent}>

        <Text style={[Ex3.child, {backgroundColor:'red'}]}>
          square One
        </Text>
        <Text style={[Ex3.child, {backgroundColor:'skyblue'} ]}>
            square Two
        </Text>
        <Text style={[Ex3.child, {backgroundColor:'lightgreen'} ]}>
            square Three
        </Text>
      </View>
  )
}
export default Exercise3;
