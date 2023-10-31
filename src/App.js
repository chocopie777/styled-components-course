import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

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
                <Title>
                    app
                </Title>
            </Flex>
            <Flex direction='column'>
                <Console />
                <Button color={'green'} align={'flex-end'}>Отправить</Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
