import Footer from './Components/Footer';
import Headers from './Components/Headers';
//import Product from './Components/Product';
import AboutUs from './screens/AboutUs';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const theme = {
    color: 'black',
    backgroundColor: 'lightgray',
    padding: '10px',
    border: '1px solid darkgray',
   
  }
  return (
    <div className="App" style={theme}>

      <Router>
      <Headers />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/Product/:id' Component={ProductScreen}/>
        </Routes>
      <Footer />
      </Router>

    </div>
  );
}

export default App;
