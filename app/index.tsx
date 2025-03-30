import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Welcome to AI Flight Booker ✈️</Text>
      <Button title="Book a Flight" onPress={() => router.push('/book-flight')} />
      <Button title="Use Speech To Text" onPress={() => router.push('/speech-to-text')} />
    </View>
  );
}
