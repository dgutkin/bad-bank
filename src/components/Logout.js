
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext, UserDispatchContext } from '../utils/context';

import Button from 'react-bootstrap/Button';

function Logout() {
    
    const [auth, setAuth] = useState(false);

    const userCtx = useContext(UserContext);
    const dispatch = useContext(UserDispatchContext);

    const navigate = useNavigate();

    useEffect(() => {

        setAuth(userCtx.auth);
        
      }, []);

    const handleLogout = () => {

        setAuth(false);
        
        const changedUser = {...userCtx, auth: false};
        dispatch({
            type: 'changed',
            user: changedUser
        });

        navigate("/");

    }

    return (
        // <Card
        //     bgcolor="dark"
        //     header="Logout"
        //     status=""
        //     body={auth ? 
        //     (<button className="btn-primary" onClick={handleLogout} href="#">
        //         Logout
        //     </button>) :
        //     (
        //         <p>You're not logged in</p>
        //     )}
        // />
        <Button className="btn btn-light" onClick={handleLogout}>
            Logout
        </Button>
    );

}

export default Logout;
