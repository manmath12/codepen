
import { AppBar,Toolbar,styled} from "@mui/material";

const Container = styled(AppBar)`
    background: #000;
    height:9vh;
`;


const Header=()=>{

    const logo = "https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Codepen-1024.png";
    return(

        <Container position="static" >
            <Toolbar>
            <img src={logo} alt="logo" style={{width:50}}/>
            </Toolbar>
        </Container >
    )
}

export default Header;