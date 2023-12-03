
import {useContext} from 'react';
import Container from 'react-bootstrap/Container';

import { UserData } from '../utils/context.js';

import '../styles/SeeData.css';

function SeeData() {

  const userData = useContext(UserData);

  return (

    <Container fluid id="see-data-container">

        <p>
            {JSON.stringify(userData.users)}
        </p>

    </Container>
  )
}

export default SeeData;
