import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Title from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

function App() {
    return (
        <AppWrapper>
            <Title>
                app
            </Title>
        </AppWrapper>
    );
}

export default App;
