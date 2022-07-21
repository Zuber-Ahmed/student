import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, CssBaseline, Grid, TextField } from "@mui/material";
import { useCallback } from "react";

//THIS IS ONLY FOR COMPONENT LEVEL STATE MANAGMENT METHODOLOGY

export const StudentItem = () => {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [on, setOff] = useState(false);
  const [txt,setTxt] = useState('')
  const [finder,setFinder] = useState("")
  const [addTag,setAddTag]=useState([]);
  
  const [isvisible,setIsVisible]=useState()
  const [isvisibless,setIsVisibless]=useState(false)
  const [some,setSome]=useState()


  
  const getData = async () => {
    const result = await axios.get("https://api.hatchways.io/assessment/students");
    setData(result.data.students);
    setCopyData(result.data.students);
    // console.log(result.data.students);
  };

  
  const handleAddTag=(ind)=>{
    
    setAddTag([...addTag,txt])
    setSome(ind)
  }

  const handleGetText=(event)=> setTxt(event.target.value);
  

  
  // here is debounce come for optimized way
  const debounce=(func)=>{
    let timer;
    return function(...args){
      const context=this;
      if(timer) clearTimeout(timer)
      timer=setTimeout(()=>{
          timer=null;
          func.apply(context,args);
      },1000)
    }
  }

  const optVersion=useCallback(debounce(handleGetText))
  


  useEffect(()=>{
    const result=copyData.filter((item)=> item.firstName.toUpperCase().includes(finder.toUpperCase()));
    setData(result)
   
  },[finder])


  useEffect(() => {
    getData();
  }, []);

const handleAdd=(ind)=>{
  console.log("id",ind)
  setIsVisible(ind)
  setIsVisibless(true)

}


const hanldeSecound=()=>{
  setIsVisibless(false)
}


  return (
      <Grid container spacing={1} textAlign='center' maxWidth='50vw' marginLeft='25%'>
        <CssBaseline/>
        <TextField style={{marginLeft:'10px',padding:'10px', fontSize:'12px'}} variant="standard" label='Search...' fullWidth onChange={(e)=>setFinder(e.target.value)}/>
        {data?.map((item, ind) => {
          return (
              <Card style={{marginTop:'10px'}} >
                <Grid item xs={12}>
                <CardContent className="img-container">
                  <img src={item.pic} />
                    {isvisibless===false&&<span className="expand" onClick={()=>handleAdd(ind)}>+</span>}
                  {isvisibless===true&& ind===isvisible&&<span className="expand" onClick={hanldeSecound}>-</span>}
                </CardContent>
                <CardContent className="text-container">
                    <h1>{item.firstName} {item.lastName}</h1>
                    <p >Company: {item.company}</p>
                    <p >Skill: {item.skill}</p>
                    <p >Email: {item.email}</p>
                      {(ind+1)==item.id?
                  <Button variant="contained" size="small" style={{backgroundColor:'gray', fontSize:'10px'}}> {addTag} </Button> :'not ok'
                }
                    <p >
                      Average:{" "}
                      {item.grades.reduce((a, b) =>
                        (Number(a) + Number(b) / 800).toFixed(3)
                        )}%</p>

                    <TextField variant="standard" label='Add a tag' onChange={(e)=>setTxt(e.target.value)}/>
                  <Button variant="contained" onClick={()=>handleAddTag(ind)} style={{backgroundColor:'gray'}}>Add</Button>
                  {isvisibless===!some?item.grades.map((elm,ind)=> 
                    <h5 style={{margin:'5px auto',padding:'0px'}} key={ind} >
                    Test: {elm} %</h5>):''}

                    {some===ind&&addTag.map((item)=>{
                      return(
                        
                        <Button variant="contained" size="small" style={{backgroundColor:'gray', fontSize:'10px'}}> {item} </Button>
                    
                      )
                    })}
                </CardContent>
            </Grid>
        </Card>
        );
      })}
    </Grid>
  );
};
