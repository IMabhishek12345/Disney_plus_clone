import {useEffect} from "react";
import styled from "styled-components";
import { auth,provider,signInWithPopup,onAuthStateChanged,signOut} from "../firebase";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
   selectUserEmail,
   selectUserName,
   selectUserPhoto,
   setUserLoginDetails,
   setSignOutState }
from "../features/user/userSlice";

const Header=(props)=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    
   useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if (user){
         setUser(user);
         navigate("/home");
      }
    })
   },[userName]);

   const handleAuth=()=>{
     if (!userName){
        signInWithPopup(auth,provider).then((result)=>{
           setUser(result.user);
         }).catch((error)=>{
            alert(error.message);
         });
     
      }else{

         signOut(auth).then(() => {
            dispatch(setSignOutState);
            navigate("/");
         }).catch((error) => {
            alert(error.message);
         });
            
    }
}
const setUser=(user)=>{
   dispatch(
      setUserLoginDetails({
         name: user.displayName,
         email: user.email,
         photo:  user.photoURL
      })
   )
} 
  

return <Nav>
     <Logo>
        <img src="./images/logo.svg" alt="Disney"  />
     </Logo>
     {!userName ?<Login onClick={handleAuth}>Login</Login>: 
       <>
      <NavMenu>
        <a href="/home">
            <img src="./images/home-icon.svg" alt="Home" />
            <span>Home</span>
         </a>
        <a >
            <img src="./images/search-icon.svg" alt="Search" />
            <span>Search</span>
         </a>
        <a>
            <img src="./images/watchlist-icon.svg" alt="Watchlist" />
            <span>Watchlist</span>
         </a>
        <a>
            <img src="./images/original-icon.svg" alt="Originals" />
            <span>Originals</span>
         </a>
        <a>
            <img src="./images/movie-icon.svg" alt="Movies" />
            <span>Movies</span>
         </a>
     </NavMenu>
     <SignOut>
        <UserImg src={userPhoto} alt={userName}/>
        <DropDown>
         <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
     </SignOut> 
     </>
     }

    
   </Nav>
           
}

const Nav=styled.nav`
 position: fixed;
 top:0;
 left:0;
 right:0;
 height:70px;
 background-color: #090b13;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding:0 36px;
 letter-spacing: 16px;
 z-index:1;
`;

const Logo=styled.a`
 padding:0;
 width: 80px;
 margin-top: 4px;
 max-height:70px;
 font-size:0;
 display: inline-block;
 img{
    display:block;
    width:100%;
 } 
`;

const NavMenu=styled.div`
align-items:center;
display: flex;
flex-flow:  row nowrap;
height:100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right:auto; 
margin-left: 25px;
a{
  display:flex;
  align-items:center;
  padding: 0 12px;
  img{
    height:20px;
    min-width:20px;
    width:20px;
    z-index:auto;
  }
  span{
    color: white;
    font-size: 13px; 
    letter-spacing: 1.42px;
    line-height:1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position:relative; 
   
   &:before{
     
    background-color: white;
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content:"";
    height: 2px;
    opacity: 1;
    position: absolute;
    left: 0px;
    right:0px; 
    transform-origin: left-center; 
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94 ) ;
    visibility: hidden;
    width:auto;
   }
}  
  &:hover{
   span:before{
      transform: scaleX(1);
      visibility: visible;
      opacity:1;
   }
  }
}


${'' /* @media(max-width:768px) {
  display: none;

} */}

`;

const Login=styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9; 
border-radius: 4px;
transition: all 0.2s;
&:hover{
  background-color:white;
  color:black;
  border-color:transparent;
}
`
const UserImg=styled.img`
 height:100%;
`

const DropDown=styled.div`
 position: absolute;
 top: 40px;
 right: 0px;
 background: rgb(19,19,19);
 border: 1px solid rgba(151,151,151,0.35);
 border-radius:4px;
 box-shadow: 0px 0px 0px 0px;
 padding:10px;
 font-size:14px;
 letter-spacing:1px;
 width: 100px;
 opacity:0;


`;

const SignOut=styled.div`
  position:relative;
  height:40px;
  width:40px;
  display:flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg}{
   border-radius: 50%;
   width:100%;
   height: 100%;
  }
  
  &:hover{
     ${DropDown}{
     opacity:1;
     transition-duration: 1s;
     }
   }



`;






export default Header