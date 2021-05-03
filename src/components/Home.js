import React from 'react'
import lift1 from '../images/1820965-ascenseur-avec-portes-ouvertes-vectoriel.jpg'
import logo from '../images/logoascenseur2.PNG'
import Avatar from '@material-ui/core/Avatar';
import gifascenseur from '../images/gifascenseur.gif'

class Home extends React.Component {
    render() {
        return (
            <div style={{marginTop: '100px', textAlign: 'center'}}>
                <h1> || _~ LIFT BOARD GAME ~_ ||</h1>
                <h2>Les jeux de l'ascenseur</h2>
                <img src={lift1} alt="lift-elevator" width='35%'/>
                {/*<img src={gifascenseur} alt="lift-elevator" width='20%'/>*/}
            </div>
        );
    }
}

export default Home;