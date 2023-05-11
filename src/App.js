import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1> I am the Shop page.</h1> 
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} >Shop</Route>
        <Route path="auth" element={<Authentication/>} >SignIn</Route>
      </Route>
    </Routes>
  );
}

export default App;
