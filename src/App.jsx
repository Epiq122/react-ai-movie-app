import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Actors from './components/actors/Actors';

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/actors/:id' element={<Actors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
