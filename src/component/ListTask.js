
import { useSelector } from "react-redux"
import Task from "./Task";
import { Button, Text,Box } from '@chakra-ui/react'
import { useState } from "react";
const ListTask=()=>{
const tasks = useSelector((state=>state.tab))
const [test, setTest] = useState(1);
    return(
        <div>
            <Box  bg='#ffffff' m={2} p={5} shadow='md' borderWidth='1px' borderRadius='md' >
    <Button m={0.5} colorScheme='teal' size='xs' onClick={() => setTest(1)}>All</Button>
    <Button m={0.5} colorScheme='teal' size='xs' onClick={() => setTest(2)}>Done</Button>
    <Button m={0.5} colorScheme='teal' size='xs' onClick={() => setTest(3)}>Not Done</Button> 
    
            <Text m={2} fontSize='2xl' color='#319795'>Liste des Taches </Text>
            {test == 2
        ? tasks.filter((el) => el.isDone == true).map((el) => <Task el={el} />)
        : test == 3
        ? tasks.filter((el) => el.isDone == false).map((el) => <Task el={el} />)
        : tasks.map((el) => <Task el={el} />)}
    </Box>    </div>  
    )
}
export default ListTask