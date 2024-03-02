import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Execute side effects like API calls, logging, etc.
    console.log('Form data changed:', name);
  }, [name]);

  const handleSubmit = () => {
    // Handle form submission
    const data = {
      name,
      email,
      age: parseInt(age),
    };
    setFormData(data);
  };

  const memoizedFormData = useMemo(() => {
    // This memoizes the form data
    return formData;
  }, [formData]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        placeholder="Enter your age"
      />

      <Button title="Submit" onPress={handleSubmit} />

      {memoizedFormData && (
        <View>
          <Text style={styles.label}>Form Data:</Text>
          <Text>Name: {memoizedFormData.name}</Text>
          <Text>Email: {memoizedFormData.email}</Text>
          <Text>Age: {memoizedFormData.age}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default FormScreen;
