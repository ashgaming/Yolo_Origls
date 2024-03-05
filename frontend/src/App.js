import Footer from './Components/Footer';
import Headers from './Components/Headers';
import AboutUs from './screens/AboutUs';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


function App() {
  const theme = {
    color: 'black',
    backgroundColor: 'lightgray',
    padding: '10px',
    border: '1px solid darkgray',
    height:'100vh',
   
  }
  return (
    <div className="App" style={theme} >
      <Router history>
      <Headers />
        <Routes>
          <Route path='/' element={<HomeScreen />} exact/>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/placeorder' element={<PlaceOrderScreen />} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/Product/:id' Component={ProductScreen}/>
          <Route path='/Profile' Component={ProfileScreen}/>
          <Route path='/Shipping' Component={ShippingScreen}/>
          <Route path='/cart/:id?' Component={CartScreen} />
        </Routes>
      <Footer />
      </Router>

    </div>
  );
}

export default App;
