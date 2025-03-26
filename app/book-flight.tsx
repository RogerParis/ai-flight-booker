import { useState } from 'react';
import { View, TextInput, Button, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function BookFlight() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState('');

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <TextInput placeholder="Origin" value={origin} onChangeText={setOrigin} />
      <TextInput placeholder="Destination" value={destination} onChangeText={setDestination} />
      <TextInput placeholder="Departure Date (YYYY-MM-DD)" value={departureDate} onChangeText={setDepartureDate} />
      <TextInput placeholder="Return Date (YYYY-MM-DD)" value={returnDate} onChangeText={setReturnDate} />
      <TextInput placeholder="Passenger Count" keyboardType="numeric" value={passengerCount} onChangeText={setPassengerCount} />

      <Button
        title="Continue"
        onPress={() =>
          router.push({
            pathname: '/confirm',
            params: {
              origin,
              destination,
              departureDate,
              returnDate,
              passengerCount,
            },
          })
        }
      />
    </ScrollView>
  );
}
