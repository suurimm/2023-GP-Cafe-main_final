// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// 수림
import { StatusBar } from 'expo-status-bar';
//import { response } from 'express';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LikeScreen = () => {
  //const [cafeDatacid, setCafeDatacid] = useState("");
  // const [cafeCategory, setCafeCategory] = useState('');
  // const [cafeScore, setCafeScore] = useState('');
  //const [cafeName, setCafeName] = useState("");
  const [cafeData, setCafeData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/brunch')
      .then((response) => response.json())
      .then((data) => {
        setCafeData(data);
        //const d = data.map((d) => d.datacid);
        //console.log(d);

        // for (m in d) {
        //   if (m == 1912771394) {
        //     console.log(m)
        //     setCafeDatacid(m)
        //   }
        // else console.log("no!")
      })

      // const c = data.map(d => d.category)
      // console.log(c[0])
      // setCafeCategory(c[0])

      // const s = data.map(d => d.score)
      // console.log(s[0])
      // setCafeScore(s[0])

      // const n = data.map(d => d.카페명)
      // console.log(n[0])
      // setCafeName(n[0])

      // console.log(data);
      // })
      .catch((error) => {
        console.error('에러 발생: ', error);
      });
  });

  return (
    <View style={styles.container}>
      <View style={styles.input_content}>
        {cafeData.map((cafe) => (
          <View key={cafe.datacid}>
            <Text>datacid: {cafe.datacid}</Text>
            <Text>카페명 : {cafe.카페명}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LikeScreen;
