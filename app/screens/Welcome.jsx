import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const user = useSelector((state) => state.user);
  console.log(user.userInfo);
  return (
    <View>
      <Text>Welcome {user.userInfo.fullName}</Text>
    </View>
  );
};

export default Welcome;
