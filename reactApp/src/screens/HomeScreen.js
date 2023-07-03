import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geocoder from 'react-native-geocoding';

// Geocoding API 키 설정
Geocoder.init('AIzaSyBIV79qlfKN64XfXLYM4AMzXs9rMKsDobg');

const HomeScreen = () => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(37.828464200111824);
  const [longitude, setLongitude] = useState(-122.42323600374547);

  useEffect(() => {
    const getAddressFromCoordinates = async () => {
      try {
        const response = await Geocoder.from(latitude, longitude);
        if (response.results.length > 0) {
          setAddress(response.results[0].formatted_address);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAddressFromCoordinates();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Address: {address}</Text>
    </View>
  );
};

export default HomeScreen;
