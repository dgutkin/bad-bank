
import { useState, useContext, useEffect } from 'react';

import { UserContext } from '../utils/context';
import Card from '../components/Card.js';

function Logout() {
    // this shouldn't be a page, but rather a button that updates context and links to home
    const [auth, setAuth] = useState(false);
    const { userCtx, setUserCtx }= useContext(UserContext);

    useEffect(() => {

        //setAuth(ctx.users.reduce((accum, e) => {return accum || e.auth}, false));
        setAuth(userCtx.auth);
        
      }, []);

    const handleLogout = () => {

        setAuth(false);
        // ctx.users.map((e) => {
        //     if (e.auth)
        //       e.auth = false;
        //   });
        setUserCtx({...userCtx, auth: false});

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
