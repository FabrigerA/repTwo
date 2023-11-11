import DungeonUpgrade from './assets/dungeon-fort-upgrade.gif'
import Dungeon from './assets/dungeon-fort.gif'
import SideBar from './SideBar';
import {useState} from 'react'




    const ImageChanger = () => {

        let [currentImage, setCurrentImage] = useState (Dungeon);
    
        const ChangeImage = () => {

            let newImage = currentImage === Dungeon ? DungeonUpgrade : Dungeon ;
            setCurrentImage(newImage)
        }

        return  <body class="body">

                  <button onClick={ChangeImage} class="upgrade-button">upgrade</button>
                  <img src={currentImage} class="body-image" id="image"></img>
        

                </body>
    }

export default ImageChanger