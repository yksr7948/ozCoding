import styled from 'styled-components'
import Nav from './components/Nav'
import Banner from './components/Banner'
import './App.css'

function App() {

  return (
    <>
      <Container>
        <Nav></Nav>
        <Banner></Banner>
      </Container>
    </>
  )
}

// 메인영역 styled
const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

export default App
