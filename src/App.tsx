import React from 'react';
import { ChainId, DAppProvider } from "@usedapp/core"
import { Header } from "./components/Header"
// import {Container} from "@material-ui/core"
import { Container } from "@material-ui/core"
import { Main } from "./components/Mains"
import {VInfo } from "./components/time"


function App() {
  return (

    <DAppProvider config={{
      supportedChains: [ChainId.Kovan],
    }}>

      <Container  maxWidth="lg">
      <Header/>
      
        <div>
         
       
          <Main/>


          <VInfo/>
        </div>
     
      </Container>



    

    </DAppProvider>



  
  );
}

export default App;
