
import { useContext } from 'react';

import { UserContext } from '../utils/context.js';

function AllData(){

  const userCtx = useContext(UserContext);

  return (

    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(userCtx)}<br/>
    </>
    
  );
}

export default AllData;
