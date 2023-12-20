import { Heading, Center, View, Image, Text, VStack } from "native-base";
import { Header } from "../components";

const Profile = () => {
  return (
    <>
      <View backgroundColor={"#9A1314"} w={"full"} h={"300"} borderBottomLeftRadius={"40"} borderBottomRightRadius={"40"}>
        <Heading color={"white"} mx={"auto"} mt={"50"}>
          Profile
        </Heading>
        <Image
          source={require("../assets/logo.png")}
          resizeMode="contain"
          backgroundColor={"white"}
          w="150"
          h="150"
          alt="Profil Logo"
          mx={"auto"}
          my={"auto"}
          borderRadius={"full"}
        />
      </View>
      <View mx={8} mt={"5"}>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            Nama :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            Arjuna January Putra Dirgantara
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            NIM :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            1204210023
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            Program Studi :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            Sistem Informasi
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            Email :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            izumiidesu@gmail.com
          </Text>
        </VStack>
      </View>
      <Image
          source={require("../assets/telkom.png")}
          resizeMode="contain"
          w="90"
          h="90"
          alt="Profil Logo"
          mx={"auto"}
          mt={"8"}
          borderRadius={"full"}
        />
    </>
  );
};

export default Profile;