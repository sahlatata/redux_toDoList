import { Container,Box } from '@chakra-ui/react';
import './App.css';
import Addtask from './component/Addtask';
import ListTask from './component/ListTask';


function App() {
  return (
    <div >
      <Container>
      <Box  bgGradient='linear(to-r, teal.500, blue.300)' m={10} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Addtask/>
      <ListTask/>
      </Box>
      </Container>
    </div>
  );
}

export default App;
