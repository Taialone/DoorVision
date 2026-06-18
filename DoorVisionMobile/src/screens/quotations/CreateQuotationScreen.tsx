import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function CreateQuotationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tạo báo giá</Text>
      <Text>Chiều rộng</Text>
      <TextInput style={styles.input} placeholder="Ví dụ: 1200" keyboardType="numeric" />
      <Text>Chiều cao</Text>
      <TextInput style={styles.input} placeholder="Ví dụ: 2200" keyboardType="numeric" />
      <Text>Hệ nhôm: Xingfa hệ 55</Text>
      <Text>Kính: Cường lực 8mm</Text>
    </View>
  );
}

export default CreateQuotationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
});
