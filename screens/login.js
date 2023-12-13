import { Heading, Image, Text, FlatList, Item, Input, Stack, Button, ScrollView, Box, FormControl, View, Center, Select, CheckIcon, WarningOutlineIcon, Pressable, Icon } from "native-base";
import { Header } from "../components";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Form = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View mx={"10"} my={"auto"}>
        <Center my={"7"}>
          <Image source={require("../assets/telkom.png")} alt="photo" w={"85"} h={'100'} />
        </Center>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18}>Sign In</Text>
          <Text fontWeight={"light"} fontSize={15} mb={"1"}>Enter your registered email address or NIM to log in</Text>
        </Box>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Email:</Text>
          <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"}/>
        </Box>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Password:</Text>
          <Input borderWidth={1.5} borderColor={"#9A1314"} w={{
            base: "100%",
            }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                <Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="#9A1314" />
            </Pressable>} placeholder="Password" />
        </Box>
        <Center>
          <Button
            onPress={() => navigation.navigate("Tabs")}
            w={"150"} h={"38"} my={"3"} bg={"#9A1314"} borderRadius={"5"}>
            <Text color={"white"} bold={true} fontSize={15}>Sign In</Text>
          </Button>
        </Center>
        
      </View>
    </>
  );
};

export default Form;