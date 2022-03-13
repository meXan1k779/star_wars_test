import { MainPage } from './components/MianPage';
import { Character } from './components/Character';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Wrapper, Container } from './components/MianPage/mainPage.style';

const App = () => {
  return (
    <BrowserRouter>
    <Wrapper>
        <Container>
      <Routes>
        <Route path="/" element={<Navigate to='/1'/>} />
        <Route path="/:page" element={<MainPage />} />
        <Route path="/:page/:id" element={<Character />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      </Container>
    </Wrapper>
    </BrowserRouter>
  );
}

export default App;
