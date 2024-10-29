import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header/>
        <Main/>
        <Footer/>
      </main>
    </ChakraProvider>
  );
}

export default App;
