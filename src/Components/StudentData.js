
import React, { useEffect} from 'react'
import {useDispatch} from "react-redux"
import axios from 'axios'
import { setItem } from '../redux/action/ItemAction'
import { StudentListing } from './StudentListing'

export const StudentData=()=>{

    const dispatch=useDispatch()
            const result= async ()=>{
            const data= await axios.get("https://api.hatchways.io/assessment/students")
            dispatch(setItem(data.data.students))
        }

        useEffect(()=>{
            result()
    },[])

        return(
            <StudentListing/>
        )
    
}