import { Heading, Image, Text, FlatList, Item, Input, Stack, Button, ScrollView, Box, FormControl, View, Center, Select, CheckIcon, WarningOutlineIcon } from "native-base";
import { Header } from "../components";
import { useState } from "react";

const Form = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  return (
    <>
      <Header title={"Izumi"} withBack="true" />
      <View mx={"10"}>
        <Center my={"7"}>
          <Image source={require("../assets/telkom.png")} alt="photo" w={"85"} h={'100'} />
        </Center>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Full Name:</Text>
          <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"}/>
        </Box>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Address:</Text>
          <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"}/>
        </Box>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Email:</Text>
          <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"}/>
        </Box>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Phone Number:</Text>
          <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"}/>
        </Box>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Choose Company:</Text>
          <Box>
            <Select borderColor={"#9A1314"} w={"100%"} borderWidth={1.5} selectedValue={company} accessibilityLabel="Choose Company" placeholder="Choose Company" _selectedItem={{
            bg: "#9A1314",
            endIcon: <CheckIcon size="5" />
          }} mt={1} onValueChange={itemValue => setCompany(itemValue)}>
              <Select.Item label="Google" value="google" />
              <Select.Item label="Facebook" value="facebook" />
              <Select.Item label="Twitter" value="twitter" />
              <Select.Item label="Instagram" value="instagram" />
              <Select.Item label="Apple" value="apple" />
            </Select>
          </Box>
        </Box>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18} mb={"1"}>Choose Position:</Text>
          <Box>
            <Select borderColor={"#9A1314"} w={"100%"} borderWidth={1.5} selectedValue={position} accessibilityLabel="Choose Position" placeholder="Choose Position" _selectedItem={{
            bg: "#9A1314",
            endIcon: <CheckIcon size="5" />
          }} mt={1} onValueChange={itemValue => setPosition(itemValue)}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Box>
        </Box>
        <Center>
          <Button
            w={"150"} h={"38"} my={"3"} bg={"#9A1314"} borderRadius={"5"}>
            <Text color={"white"} bold={true} fontSize={15}>Submit</Text>
          </Button>
        </Center>
        
      </View>
    </>
  );
};

export default Form;