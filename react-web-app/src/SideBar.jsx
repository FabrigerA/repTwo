
import DungeonUpgrade from './assets/dungeon-fort-upgrade.gif'
import Dungeon from './assets/dungeon-fort.gif'
import CastleUpgrade from './assets/castle-fort-upgrade.png'
import Castle from './assets/castle-fort.gif'
import {useState} from 'react'
import SideBarButton from './SideBarButton'
import Body from './Body'


function SideBar(){
    
    const [currentImage, setCurrentImage] = useState(null)

    const castle = (Image) => {
        setCurrentImage(Image)
        console.log("castle")
        
    };

    const dungeon = (Image) => {
        setCurrentImage(Image)
        console.log("dungeon")
        
    };

    return(
        <>
                <div class="sidebar">

                <SideBarButton onClick={() => castle(Castle)} class="castle-button sidebar-button"/>
            
                <SideBarButton class="rampart-button sidebar-button"/>

                <SideBarButton class="sidebar-button tower-button"/>
            
                <SideBarButton class="sidebar-button inferno-button"/>
            
                <SideBarButton class="sidebar-button necropolis-button"/>
            
                <SideBarButton onClick={() => dungeon(Dungeon)} class="sidebar-button dungeon-button"/>
            
                <SideBarButton class="sidebar-button stronghold-button"/>
    
                <SideBarButton class="sidebar-button fortress-button"/>
            
                <SideBarButton class="sidebar-button conflux-button"/>
            
                <SideBarButton class="sidebar-button cove-button"/>
            
        </div>

        <Body  setcurrentImage={setCurrentImage} currentImage={currentImage}/>

        </>

    );
}
export default SideBar