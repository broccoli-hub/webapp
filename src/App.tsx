import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import './App.css';
import SignUpView from './views/SingUpView';
import WalletSignInView from './views/WalletSignInView';
import Dashboard from './views/Dashboard';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<SignUpView />} /> */}
                {/* <Route path="/wallet-signin" element={<WalletSignInView />} /> */}
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
