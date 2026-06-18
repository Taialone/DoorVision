import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DoorVision Mobile</Text>
      <Text>App tạo báo giá cửa nhôm kính</Text>
      <Button title="Tạo báo giá mới" onPress={() => {}} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
