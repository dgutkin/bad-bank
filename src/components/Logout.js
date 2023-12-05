
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext, UserContextDispatch } from '../utils/context';

import Button from 'react-bootstrap/Button';

function Logout() {

    const userCtx = useContext(UserContext);
    const dispatch = useContext(UserContextDispatch);

    const navigate = useNavigate();

    const handleLogout = () => {
        
        const changedUser = {...userCtx, auth: false};
        dispatch({
            type: 'changed',
            user: changedUser
        });

        navigate("/");

    }

    return (
        
        <Button className="btn btn-light" onClick={handleLogout}>
            Logout
        </Button>
        
    );

}

export default Logout;
