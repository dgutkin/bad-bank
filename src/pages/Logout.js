
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { UserContext, UserDispatchContext } from '../utils/context';
import Card from '../components/Card.js';

function Logout() {
    // this shouldn't be a page, but rather a button that updates context and links to home
    const [auth, setAuth] = useState(false);

    const userCtx = useContext(UserContext);
    const dispatch = useContext(UserDispatchContext);

    const navigate = useNavigate();

    useEffect(() => {

        //setAuth(ctx.users.reduce((accum, e) => {return accum || e.auth}, false));
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
        <Card
            bgcolor="dark"
            header="Logout"
            status=""
            body={auth ? 
            (<button className="btn-primary" onClick={handleLogout} href="#">
                Logout
            </button>) :
            (
                <p>You're not logged in</p>
            )}
        />
    );

}

export default Logout;
