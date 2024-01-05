import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  Input,
  IconButton,
  Icon,
  Center,
  Toast,
  ScrollView,
  Spinner,
  Button,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskList } from "../components";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header } from "../components"; 

const TaskScreen = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();


  const toastID = "toast-add-task";

  const handleAddTask = (data) => {
    if (data === "") {
      if (!Toast.isActive(toastID)) {
        Toast.show({
          id: toastID,
          title: "Masukan nama task",
        });
      }
      return;
    }

    setList((prevList) => [...prevList, { title: data, isCompleted: false }]);
    setInputValue("");

    try {
      AsyncStorage.setItem(
        "@task-list",
        JSON.stringify([...list, { title: data, isCompleted: false }])
      );
    } catch (e) {
      console.log("Error add task: in task-all.js");
      console.error(e.message);
    }
  };

  const handleDeleteTask = (index) => {
    const deletedList = list.filter((_, listIndex) => listIndex !== index);
    setList(deletedList);

    try {
      AsyncStorage.setItem("@task-list", JSON.stringify(deletedList));
    } catch (e) {
      console.log("Error delete task: in task-all.js");
      console.error(e.message);
    }
  };

  const handleStatusChange = (index) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });

    try {
      AsyncStorage.setItem("@task-list", JSON.stringify(list));
    } catch (e) {
      console.log("Error update status task: in task-all.js");
      console.error(e.message);
    }
  };

  const getTaskList = async () => {
    try {
      const value = await AsyncStorage.getItem("@task-list");
      if (value !== null) {
        console.log(value);
        setList(JSON.parse(value));
      } else {
        console.log("No Tasks");
      }
    } catch (e) {
      console.log("Error get task: in task-all.js");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <>
      <Header title={"Mahasiswa"} />
      <Box flex={1}>
      <Box mt="15px" mx="15px" mb="7.5px">
        <HStack space="5px">
          <Input
            size="lg"
            flex={6}
            onChangeText={(char) => setInputValue(char)}
            value={inputValue}
            borderWidth={2}
            borderColor="#9A1314"
            placeholder="Tambah Pekerjaan"
          />
          <IconButton
            flex={1}
            borderRadius="sm"
            backgroundColor={"#9A1314"}
            icon={
              <Icon as={Feather} name="plus" size="lg" color="white" />
            }
            onPress={() => {
              handleAddTask(inputValue);
            }}
          />
          <Button  borderRadius="sm" backgroundColor={"#9A1314"} 
          onPress={() => navigation.navigate("Taskdone")}>
            <Ionicons name="checkmark-done-outline" size={25} color="white" /> 
          </Button>
        </HStack>
      </Box>
      {isLoading ? (
        <Center flex={1}>
          <Spinner size="lg" color="#9A1314" />
        </Center>
      ) : (
        <ScrollView>
          <Box mb="15px" mx="15px">
            {list.map((item, index) => (
              <Box key={item.title + index.toString()}>
                <TaskList
                  data={item}
                  index={index}
                  deletedIcon={true}
                  onItemPress={() => handleStatusChange(index)}
                  onChecked={() => handleStatusChange(index)}
                  onDeleted={() => handleDeleteTask(index)}
                />
              </Box>
            ))}
          </Box>
        </ScrollView>
      )}
    </Box>
    </>
  
  );
};

export default TaskScreen;
