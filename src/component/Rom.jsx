import { Box, Button, Grid, ListItemText, Paper, Stack, TextField } from "@mui/material"
import {ref, set, onValue } from "firebase/database";
import { database } from "./Firebase";
import { Send } from "@mui/icons-material";
import { useState } from "react";

function writeUserData(userId,  text, id) {
  let vaqt=new Date();
  const soat=vaqt.getHours()+':'+(vaqt.getMinutes()>10 ? vaqt.getMinutes(): '0'+vaqt.getMinutes() )+':'+vaqt.getMilliseconds();
  set(ref(database, `${userId}/` + soat), {
    key: soat,
    text: text, 
    id
  });
}



function Rom(ism) {

  const [ChatText, setChatText]=useState([]);

  const mass=ism
  const sr=mass.ism.id > mass.id ? mass.ism.id+mass.id : mass.id+  mass.ism.id;
if (mass.id && ChatText.length==0) {

  const starCountRef = ref(database, sr);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(Object.values(data));
    setChatText(Object.values(data))
   });
}
  function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text=data.get('text')
    writeUserData(sr, text, mass.id);
  }


  return (
    <Grid sx={{display:'flex', flexDirection:'column', height:'100%'}}>
          <Grid sx={{paddingY:1, paddingX:5}} component={Paper}><ListItemText primary={mass.ism.nam}/></Grid>
          <Grid flex={1} sx={{display:'flex', alignItems:'end' , height:'100%'}}>
            <Grid width={'100%'}> 
            {ChatText.length==0 ? '': ChatText.map(k=> <Stack direction={mass.id==k.id ? 'row-reverse':'row'} key={k.key}> <Paper sx={{paddingY:1, paddingX:2, maxWidth:'80%', my:1, bgcolor:`${mass.id==k.id ? '#d500f9':'#3d5afe'}`, color:'white'}}><h4 style={{margin:0, fontWeight:'initial', }}>{k.text}</h4> <span style={{fontSize:'8px'}}>{k.key.slice(0, 5)}</span> </Paper>  </Stack>)  }              
            </Grid>    
        </Grid> 
        <Grid
        component="form"
        onSubmit={handleSubmit}
      sx={{
        display:'flex',
        gap:1,
        justifyContent:'center',
        alignItems:'center',
        paddingX:5,
        Width: '100%',
      }}
    >
      <TextField fullWidth name="text"  id="text" />
      <Button type="submit"><Send color="primary"/></Button>
    </Grid>     
    </Grid>
  )
}

export default Rom