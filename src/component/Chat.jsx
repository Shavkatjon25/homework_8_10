import { Box, Grid, Paper, Skeleton, TextField } from "@mui/material"
import Odam from "./Odam"
import {  Send} from "@mui/icons-material"
import Rom from "./Rom"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./Firebase";
import { useEffect, useState } from "react";


const auth = getAuth()



function Chat() {
const naviga=useNavigate()
const [mal, setMal]=useState([]);
const [ism, setIsm]=useState('')
const [userId, setUserId]=useState();
const [looding, setLooding]=useState(true)


async function Dt(){
  let arr=[]
  const querySnapshot = await getDocs(collection(db, "foydalanuvchilar"));
querySnapshot.forEach((doc) => {
  arr.push(doc.data());
});
setLooding(false)
setMal(arr)

}
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid= user.uid;
      setUserId(uid)
    } else {
      naviga('/')
    }
  });
  Dt()
}, [])



  return (
    <Grid component={'main'} container sx={{height:'100%'}}>
      <Grid sm={4} md={5} item>
      <Grid sx={{display:`${looding ? 'block':'none'}`}}>
      <Grid sx={{display:'flex', alignItems:'center', gap:2, margin:2}}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={20} />
      </Grid>
      <Grid sx={{display:'flex', alignItems:'center', gap:2, margin:2}}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={20} />
      </Grid>
      <Grid sx={{display:'flex', alignItems:'center', gap:2, margin:2}}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={20} />
      </Grid>
      </Grid>
      {mal.length==0 ? '': mal.map(m=>m.id==userId ? '' : <Odam nam={m.name} id={m.id} fn={setIsm} key={m.id}/>)}
      </Grid>
      <Grid sm={8} md={7} item component={Paper} elevation={12} sx={{height:'100vh', display:'flex', flexDirection:'column',padding:2}}>
      <Grid  flex={1}>
          <Rom ism={ism} id={userId} />
      </Grid>

      </Grid>
    </Grid>
  )
}

export default Chat