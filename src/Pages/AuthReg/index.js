import Authwindow from '../../components/elements/auth';
import Regwindow from '../../components/elements/registration';
import './index.css'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Authreg() {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(true);

    const openRegistrationModal = () => {
        setIsRegistrationOpen(true);
        setIsLoginOpen(false);
    };

    const openLoginModal = () => {
        setIsRegistrationOpen(false);
        setIsLoginOpen(true);
    };

    return (
        <div className="authreg">
            {isRegistrationOpen && <Regwindow openModals={openLoginModal} />}
            {isLoginOpen && <Authwindow openModals={openRegistrationModal} />}
            <Outlet />
        </div>
    )
}

export default Authreg;