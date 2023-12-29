import React from "react";
import { Text, Box, VStack, HStack, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { deleteCompany } from "../screens/actions/AuthAction";

const ListCompany = ({ nama, deskripsi, divisi, image, companyId }) => {
  const navigation = useNavigation();

  const handleEditClick = () => {
    navigation.navigate("Company", {
        nama,
        deskripsi,
        divisi,
        image,
      companyId,
    });
  };

  const handleDeleteClick = () => {
    deleteNote(companyId);
    navigation.navigate("Company");
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', { companyId });
      }}>
      <Box
        shadowColor="black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={"25"}
        shadowRadius={"3.5"}
        backgroundColor="$white"
        padding={"2"}
        width={"full"}
        borderRadius={"10"}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        my={"2"}
        px={"5"}
        py={"3"}
      >
        <VStack>
          <Heading size="10">{nama}</Heading>
          <Text size="md" maxWidth={"$64"}>{deskripsi}</Text>
          <Text size="md" maxWidth={"$64"}>{divisi}</Text>
          <Box
            shadowColor="black"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={"$25"}
            shadowRadius={"$3.5"}
            elevation={"$5"}
            backgroundColor="$green700"
            borderRadius={"$lg"}
            py={"$2"}
            px={"$3"}
            alignItems="center"
            justifyContent="center"
            mt={"$3"}
          >
            {image && (
                <Image
                    source={{ uri: image }} // Menggunakan URI dari image
                    alt="Company Image"
                    size="md"
                    borderRadius={10}
                    mt={3}
                />
            )}
          </Box>
        </VStack>
        <HStack>
          <Button onPress={handleEditClick}>
            <Text>tes</Text>
          </Button>
          <Button onPress={handleDeleteClick}>
          <Text>tes</Text>
          </Button>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default ListCompany;