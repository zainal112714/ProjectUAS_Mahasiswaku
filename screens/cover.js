import React from 'react';
import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button, Box } from "native-base";
import {View, StyleSheet} from 'react-native';
import { Background } from "../components";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cover = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={{ marginHorizontal: 100, marginVertical: 300 }}>
        <Heading flex={1} color={"white"} fontSize={"33"}>MahasiswaKu</Heading>
      </View>
      <View style={{ marginVertical: 137 }}>
        <Button
        withBack="true"
          onPress={() =>
            navigation.navigate("Choose")
          } 
          mx={"auto"} w={"40%"} bg={"#9A1314"} borderRadius={"10"} >
          <Text fontWeight={"bold"} fontSize={"20"} color={"white"} alignItems={"center"}>Continue</Text>
        </Button>
      </View>
    </Background>
  );
}

export default Cover;