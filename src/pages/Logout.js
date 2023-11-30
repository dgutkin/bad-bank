
import React from 'react';

import { UserContext } from '../utils/context';
import Card from '../components/Card.js';

function Logout() {

    const [auth, setAuth] = React.useState(false);
    const ctx = React.useContext(UserContext);

    React.useEffect(() => {

        setAuth(ctx.users.reduce((accum, e) => {return accum || e.auth}, false));
        
      }, []);

    const handleLogout = () => {

        setAuth(false);
        ctx.users.map((e) => {
            if (e.auth)
              e.auth = false;
          });

    }

    return (
        <Card
            bgcolor="dark"
            header="Logout"
            status=""
            body={auth ? 
            (<button className="btn-primary" onClick={handleLogout}>
                Logout
            </button>) :
            (
                <p>You're not logged in</p>
            )}
        />
    );

}

export default Logout;
