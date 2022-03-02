import { IconButton,Checkbox,Text, Box  } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteTask, reverseDone } from "../redux/Action"
import { useDispatch } from "react-redux"
import EditTask from "./EditTask"
const Task=({el})=>{
const dispatch= useDispatch()

        return(
<div>
<Box   m={2} borderRadius='md' max='auto' borderWidth='1px'  overflow='hidden'>
<EditTask el={el}/>
<IconButton  onClick={()=>dispatch(deleteTask(el.id))} m={1} variant='outline' size='sm' icon={<DeleteIcon /> }/>
<Checkbox isChecked={el.isDone == true}  colorScheme='teal' onChange={() => dispatch(reverseDone(el.id))}  ><Text fontSize='xl' as={el.isDone &&'del'}>{el.description } </Text></Checkbox>

</Box>
</div>
    )
    }
    export default Task