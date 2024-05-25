
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import HomePage from './pages/homePage';
import ServicesPage from './pages/services';
import LoginPage from './pages/loginPage';
import BookingForm from './pages/BookingForm';
import RegisterPage from './pages/registerPage';
import UserPage from './pages/userPage';
import UserProfile from './pages/userProfile';
import BookingList from './pages/bookingList';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/list" element={<BookingList />} />


        {/* Add routes for settings and logout */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
