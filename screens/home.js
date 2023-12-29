import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button, HStack, View, VStack, Center } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import companys from "../companys";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail", { item: item })}
      >
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"Mahasiswa"} />
      <ScrollView backgroundColor={"white"} width={"100%"} height={"full"}>
          <View mx={"7"}>
            <Box mb={"6"} mt={"6"}>
              <VStack>
                <Heading fontSize={"26"} color={"black"}>Ayo Temukan Perusahaan</Heading>
                <Heading fontSize={"26"} color={"black"}>Impianmu!</Heading>
              </VStack>
            </Box>
            <Image source={require("../assets/foto.jpg")} alt="photo" w={"350"} h={'250'} borderRadius={"20"}/>
            <HStack>
              <Text fontSize={20} mt={"4"} mb={"2"}>Selamat Datang, </Text>
              <Text bold={true} fontSize={20} mt={"4"} mb={"2"}>Mahasiswaku!</Text>
            </HStack>
            <Text textAlign={"justify"}>Kamu adalah seorang mahasiswa penuh semangat, berbakat, dan penuh potensi. Dan inilah waktunya untuk meraih impianmu! 
            Kamu adalah seorang mahasiswa penuh semangat, berbakat, dan penuh potensi.</Text>
          </View>

            <Box mt={"6"} mb={9} pt={"3"} px={"2"} backgroundColor={"#9A1314"}>
            <Text fontSize={25} mx={"auto"} pb={"4"} color={"white"}>Perusahaan</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {companys.slice(3).map((item, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      key={index}
                      onPress={() =>
                        navigation.navigate("Detail", { item: item })
                      }
                    >
                      <Box w={"100"} mx={"2"} pb={"5"}>
                        <Image
                          source={{ uri: item.image }}
                          w="300"
                          resizeMode="cover"
                          h="24"
                          alt="Image Data"
                          mb={"2"}
                          borderRadius={"15"}
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
                <Button
                  onPress={() => navigation.navigate("Company")}
                  h={"38"} mt={"7"} mx={"2"} bg={"#FF003D"} borderRadius={"10"}>
                  More
                </Button>
              </ScrollView>
            </Box>
              
              <Center mx={"10"} mb={"120"}>
                <Box px={"4"} bg={"#ffff"} w={"container"} h={'container'} mx={"auto"} py={"4"} borderRadius={"10"} boxShadow={"10"} shadow={"6"}>
                  <Heading color={"black"} pt={"1"} pb={"2"}> Visi</Heading>
                  <Text color={"black"} pb={"2"} textAlign={"justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. 
                    Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra.
                  </Text>
                  <Heading color={"black"} pb={"2"} pt={"1"}> Misi</Heading>
                  <Text color={"black"} textAlign={"justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. 
                    Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra.
                  </Text>
                </Box>
              </Center>
      </ScrollView>
    </>
  );
};

export default Home;