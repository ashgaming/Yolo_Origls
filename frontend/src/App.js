import Footer from './Components/Footer';
import Headers from './Components/Headers';
import Product from './Components/Product';
import AboutUs from './screens/AboutUs';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const theme = {
    color: 'black',
    backgroundColor: 'lightgray',
    padding: '10px',
    border: '1px solid darkgray',
   
  }
  return (
    <div className="App" style={theme}>
      <Headers />

      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/Product/:_id" render={({ match }) => <Product product={match.params._id} />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
