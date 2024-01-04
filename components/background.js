import React from 'react';
import {View, SafeAreaView} from 'react-native';
import { Image } from "native-base";

const Background = ({ children }) => {
  return (
      <View>
        <Image source={require("../assets/cover2.png")} h={"full"} w={"full"} alt='background' />
        <View style={{ position: "absolute" }}>
          {children}
        </View>
      </View>
  );
}

export default Background;