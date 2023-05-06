import styled from "styled-components";
import Imgslider from "./Imgslider";
import Viewers from "./Viewers";
import Recommend from "./Recommend";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import {db, getDocs,collection } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";


const Home=(props)=>{
   
   const dispatch=useDispatch();
   const userName=useSelector(selectUserName);
   
   let recommends=[];
   let newDisneys=[];
   let originals=[];
   let trending=[];
   
   useEffect(()=>{
    const movieData = collection(db, "movies");
    
    getDocs(movieData).then((snapshot)=>{
    snapshot.docs.map((doc)=>{
             
      console.log(recommends);
      switch(doc.data().type){
          case "recommend":
           if (recommends.length<4){
             recommends=[...recommends,{id: doc.id,...doc.data()}]
            } 

          break;
          
          case "new":
            if (newDisneys.length<4){
          newDisneys=[...newDisneys,{id: doc.id,...doc.data()}]
            }
          break;
          
          case "original":
            if (originals.length<4){
          originals=[...originals,{id: doc.id,...doc.data()}]
            }
          break;
          
          case "trending":
            if (trending.length<4){
          trending=[...trending,{id: doc.id,...doc.data()}]
            }
          break; 
          
          }   
      })
     dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          originals: originals,
          trending: trending
        })
        )
    });

  },[userName]);
    
  return (

      <Container>
      <Imgslider />
      <Viewers/>
      <Recommend/>
      <NewDisney/>
      <Originals/>
      <Trending />
      </Container> 

)
}
     
 const Container=styled.main`
 position: relative;
 min-height: calc(100vh-250px);
 overflow-x: hidden;
 display: block;
 top: 72px; 
 padding:  calc(3.5vw + 5px );

   &:after{
    background: url("./images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity:1;
    z-index:-1;
   }

`;


export default Home;