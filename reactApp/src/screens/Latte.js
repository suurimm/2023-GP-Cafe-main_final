import { StyleSheet, Text, View } from 'react-native';

const Latte = () => {
  return (
    <View style={styles.container}>
      <Text>Latte</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Latte;
