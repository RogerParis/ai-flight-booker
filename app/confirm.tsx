import { useLocalSearchParams } from 'expo-router';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { sendMCPToGPT } from '../lib/mcp';

export default function Confirm() {
  const { origin, destination, departureDate, returnDate, passengerCount } = useLocalSearchParams();
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    const result = await sendMCPToGPT({
      intent: 'book_flight',
      origin,
      destination,
      departure_date: departureDate,
      return_date: returnDate,
      passenger_count: passengerCount,
      status: 'awaiting_confirmation',
    });
    setResponse(result);
    setLoading(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>From: {origin}</Text>
      <Text>To: {destination}</Text>
      <Text>Departure: {departureDate}</Text>
      <Text>Return: {returnDate}</Text>
      <Text>Passengers: {passengerCount}</Text>

      <Button title="Confirm Booking" onPress={handleConfirm} />
      {loading && <ActivityIndicator size="large" />}
      {response && <Text style={{ marginTop: 20 }}>{response}</Text>}
    </View>
  );
}
