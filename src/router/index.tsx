import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GuestRoute from './GuestRoute';
import AuthRoute from './AuthRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import EmptyPage from '../pages/EmptyPage';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes = () => (
    <Router>
        <Routes>
            {/* <Route element={<GuestRoute />}></Route> */}
            <Route>
            <Route path="/profile" element={<ProfilePage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/empty" element={<EmptyPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;
