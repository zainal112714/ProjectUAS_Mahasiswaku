import { Heading, Image, Text, FlatList, HStack, VStack, View } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import companys from "../companys";

const Company = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Detail", { item: item })}
        >
            <View mx={"5"} my={"4"}>
              <Box bg={"white"} w={"full"} h={'auto'} borderRadius={"10"} boxShadow={"10"} shadow={"6"} flexDirection={"row"}>
                <Image
                  source={{ uri: item.image }}
                  w="120"
                  h="auto"
                  alt="Image Data"
                  borderBottomLeftRadius={10}
                  borderTopLeftRadius={10}

                />
                <VStack paddingY={"2"}>
                  <Text bold={true} fontSize={"14"} ml={"3"} alignItems={"center"}>
                    {item.title}
                  </Text>
                  <Text bold={false} fontSize={"12"} alignItems={"center"} textAlign={"justify"} ml={"3"} mx={135} >
                    {item.content}
                  </Text>
                </VStack>
              </Box>
            </View>
          
        </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"Izumi"} />
      <ScrollView>
        <FlatList
          data={companys}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View mx={"10"} mt={"2"} mb={"120"} >
            <Heading color={"black"} pt={"1"} pb={"2"}>Halo Mahasiswa!</Heading>
            <Text color={"black"} pb={"2"} textAlign={"justify"}>
              Kalau perusahaan yang kamu mau tidak ketemu, tungguin yaa nanti MahasiwaKu update lagi kok!
            </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Company;