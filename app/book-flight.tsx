import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { router } from 'expo-router';

export default function BookFlight() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Destination" value={destination} onChangeText={setDestination} />
      <TextInput placeholder="Departure Date (DD-MM-YYYY)" value={date} onChangeText={setDate} />
      <Button
        title="Continue"
        onPress={() =>
          router.push({ pathname: '/confirm', params: { destination, date } })
        }
      />
    </View>
  );
}
