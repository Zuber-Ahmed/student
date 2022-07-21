import { useDispatch, useSelector } from "react-redux/es/exports";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Card, CssBaseline, TextField, Typography } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {addItem} from '../redux/action/ItemAction'

export const StudentListing = () => {
  const [toggle, setToggle] =useState(true)
  const [cardID, setCardID] =useState()
  const [details, setDetails] =useState({})
  const [tagText, setTagText]=useState('');


  const result = useSelector((state) => state.studentReducer.stdData);
  const tags = useSelector(state=>state.studentReducer.stdDataWithTag);
    
  const dispatch=useDispatch();
    const {id,firstName}=details;


  const handleToggle =(item,index)=>{
        setToggle(!toggle)
        setCardID(index)
        setDetails(item)
    } 
  const handleTag =(index) =>{
      dispatch(addItem({tag:tagText,tagNum:index}))
      setTagText('')
  }

  return (
    <Box
      textAlign="center"
      borderRadius="5px"
      minHeight="90vh"
      bgcolor="lightcyan"
      ><CssBaseline/>
      <Box
        minHeight="50vh"
        maxWidth="50vw"
        textAlign="center"
        p={2}
        marginLeft="20%"
        bgcolor="lightblue"
      >


        {result.map((item, index) => {
          return (
            <Card style={{margin:'0.5em'}} key={index}>
               {toggle===true && cardID===index ?  <RemoveIcon fontSize="large" style={{float:'right', cursor:'pointer'}} onClick={()=>handleToggle(item,index)} /> :
               <AddIcon fontSize="large" style={{float:'right', cursor:'pointer'}} onClick={()=>handleToggle(item,index)} />}
              <Avatar key={item.pic} src={item.pic} style={{ textAlign: "center",width:'100px',marginTop:'10%',height:'80px' }}  />
              <Typography key={item.firstName} variant="subtitle1">
                {item.firstName} {item.lastName}
              </Typography>
              <p key={item.company}>Company: {item.company}</p>
              <p key={item.skill}>Skill: {item.skill}</p>
              <p key={item.email}>Email: {item.email}</p>
              {tags.map((elm)=>
                    elm.tagNum===index?<span style={{borderRadius:'5px',width:'30px',height:'30px',backgroundColor:'gray',color:'whitesmoke',margin:'5px',padding:'10px'}}>{elm.tag}</span>:''
              )}
              <p style={{borderRadius:'10px',border:'none'}}>{}</p>
              <TextField label='Tag' variant="standard" size="small" onChange={(e)=>setTagText(e.target.value)} />
              <button style={{padding:'0.5rem', backgroundColor:'gray',color:'white',borderRadius:'10px',border:'none',cursor:'pointer'}} onClick={()=>handleTag(index)}>Add tag</button>

              <p>
                Average:{" "}
                {item.grades.reduce((a, b) =>
                  (Number(a) + Number(b) / 800).toFixed(3)
                )}
                %
              </p>
              {item.id===id && toggle===true && item.grades.map((elm,indx)=>{
                return(
                    <p key={indx}>Test: {elm}%</p>
                )
              })}

            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
