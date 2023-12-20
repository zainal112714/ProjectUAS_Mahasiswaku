import { Heading, Center, Text, Image, ScrollView, Box, Button, View } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Detail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <>
      <Header title={"Izumi"} withBack="true" />

      <ScrollView>
        <View>
          <Image source={{uri: params.image}} alt="photo" w={"full"} h={'220'} mx={"auto"} px={"16"} borderBottomLeftRadius={40} borderBottomRightRadius={40}/>
          <View position={"absolute"} mx={150} my={170}>
            <Image
              source={require("../assets/logo.png")}
              resizeMode="contain"
              w="90"
              h="90"
              alt="Companny Logo"
              borderRadius={"full"}
              borderColor={"#9A1314"}
              borderWidth={"3"}
            />
          </View>
          <View mt={"7"} mx={"10"}>
            <Heading mx={"auto"} pt={"6"} pb={"1"} >{params.title}</Heading>
            <Text pt={"1"} pb={"1"} textAlign={"justify"}>{params.content}</Text>
            <View mx={"5"}>
              <Text bold={true} fontSize={16} pt={"1"} pb={"1"} >{params.judul}</Text>
              <Text pt={"1"} pb={"3"} textAlign={"justify"}>{params.posisi}</Text>
            </View>
          </View>
        </View>

        <Box pt={"3"} pb={"8"}>
          <Button
            onPress={() => navigation.navigate("Form")} 
            w={"30%"} mx={"auto"} bg={"#FF003D"} borderRadius={"10"} p={"2"}>
            Daftar Sekarang
          </Button>
        </Box>
      </ScrollView>
     
    </>
  );
};

export default Detail;