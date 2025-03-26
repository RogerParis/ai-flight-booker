import { useLocalSearchParams } from 'expo-router';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { sendMCPToGPT } from '@/lib/mcp';

export default function Confirm() {
  const { destination, date } = useLocalSearchParams();
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    const result = await sendMCPToGPT({
      intent: 'book_flight',
      destination,
      departure_date: date,
      status: 'awaiting_confirmation',
    });
    setResponse(result);
    setLoading(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Destination: {destination}</Text>
      <Text>Date: {date}</Text>

      <Button title="Confirm Booking" onPress={handleConfirm} />
      {loading && <ActivityIndicator size="large" />}
      {response && <Text style={{ marginTop: 20 }}>{response}</Text>}
    </View>
  );
}
