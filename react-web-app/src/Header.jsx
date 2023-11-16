import headerImg from './assets/homm3header.jpg';

function Header(){

    return(
    <header>
        <div class="header">
            <img src={headerImg} class="header-img"></img>
        </div>  
    </header>

    );
  
}

export default Header