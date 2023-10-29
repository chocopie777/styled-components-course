import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

function App() {
    return (
        <AppWrapper>
            <Flex justify='center'>
                <Title color={'green'}>
                    app
                </Title>
            </Flex>
        </AppWrapper>
    );
}

export default App;
