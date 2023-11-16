import './styles/Body.css'
import { useState } from 'react'
import DungeonUpgrade from './assets/dungeon-fort-upgrade.gif'
import Dungeon from './assets/dungeon-fort.gif'
import CastleUpgrade from './assets/castle-fort-upgrade.png'
import Castle from './assets/castle-fort.gif'

function Body({setcurrentImage, currentImage}){


    let bodyImage=currentImage;


    const changeImage = () => {

        switch(bodyImage){
            case Castle: setcurrentImage(CastleUpgrade); break;
            case Dungeon: setcurrentImage(DungeonUpgrade); break;
        }

    }

    return(
          
        <div class="body">

            <button onClick={changeImage} class="upgrade-button">upgrade</button>
            <img src={bodyImage} class="body-image" id="image"></img>
                
        </div>
  

    );  
}
export default Body