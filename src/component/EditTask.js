import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../redux/Action'


const EditTask=({ el })=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [textPut, setTextPut] = useState(el.description);
    const dispatch = useDispatch()
    return (
    <>
        <IconButton  onClick={onOpen} m={1} variant='outline' size='sm' icon={<EditIcon /> }/>
    

        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modifier la Tache</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>Description</FormLabel>
                <Input 
                onChange={(e) => setTextPut(e.target.value)}
                ref={initialRef} 
                placeholder='description' />
            </FormControl>
            </ModalBody>

            <ModalFooter>
            <Button onClick={() => {dispatch(editTask({ id: el.id, description: textPut })); onClose();}} colorScheme='blue' mr={3}>
                Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
    </ModalContent>
        </Modal>
</>
    )
}

export default EditTask