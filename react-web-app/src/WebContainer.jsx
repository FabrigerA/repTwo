import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SideBar from './SideBar.jsx'
import Body from './Body.jsx'
import './styles/WebContainer.css'
import './styles/Body.css'

function WebContainer(){

    return(

        <>
        <div class="web-container">
            <Header></Header>
            <SideBar></SideBar>
            <Body></Body>
            <Footer></Footer>


        </div>

  
  
        </>





    );

}

export default WebContainer