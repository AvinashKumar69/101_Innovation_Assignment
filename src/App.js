import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import FoodDetails from './pages/FoodDetails';
import FoodList from './pages/FoodList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<FoodList />} />
        <Route exact path='/:id' element={<FoodDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
