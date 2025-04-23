import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getCarbonFootprint } from '../services/ApiService';

export default function HomeScreen() {
  const [footprint, setFootprint] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCarbonFootprint('user123');
      setFootprint(res.data.footprint);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Your Carbon Footprint: {footprint} kg CO₂</Text>
    </View>
  );
}
