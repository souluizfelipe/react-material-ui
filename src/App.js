import Container from '@material-ui/core/Container';
import { TextField, Button } from '@material-ui/core';

import './App.css';

function App() {

  return (
    <>
      <Container maxWidth="md">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <form>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </form>  
      </Container>
    </>
  );
}

export default App;
