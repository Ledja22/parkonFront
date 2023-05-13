import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GuestRoute from './GuestRoute';
import AuthRoute from './AuthRoute';
import HomePage from '../pages/HomePage';
import Counter from '../components/Counter';

const AppRoutes = () => (
    <Router>
        <Routes>
            {/* <Route element={<GuestRoute />}></Route> */}
            <Route>
                <Route path="/" element={<Counter />} />
                <Route path="/home" element={<HomePage />} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;
