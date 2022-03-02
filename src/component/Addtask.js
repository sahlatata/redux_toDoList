import { useDispatch } from "react-redux"
import { useState } from "react"
import { addTask } from "../redux/Action";
import { Input, IconButton,Text,Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Addtask=()=>{
const dispatch = useDispatch()
const [inputText , setinpuText]= useState()
    return(

<Box bg='#ffffff' m={2} p={5} shadow='md' borderWidth='1px' borderRadius='md' >
<Text fontSize='2xl' color='#319795'>Ajouter une Tache  </Text>
<Input  m={2} htmlSize={8}  width='auto' onChange={(e)=>setinpuText(e.target.value)}/>
<IconButton colorScheme='teal' onClick={()=>dispatch(addTask(inputText))} aria-label='Add to friends' icon={<AddIcon />} /> 
</Box>
       
    )
}

export default Addtask