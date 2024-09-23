import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useStyles from './styles';

import Movies from './components/movies/Movies';
import Actors from './components/actors/Actors';
import MovieInformation from './components/movie-information/MovieInformation';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Routes>
              <Route path='/' element={<Movies />} />
              <Route path='/actors/:id' element={<Actors />} />
              <Route path='/movie/:id' element={<MovieInformation />} />
              <Route path='/profile/:id' element={<Profile />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
