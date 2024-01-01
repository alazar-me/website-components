import Navbar from './assets/navbar';
import ProjectCard from './assets/ProjectCards';
import React from 'react';
import { useState } from 'react'
import TimeLine from './assets/TimeLine';


export default function App() {
  return (
    <div className=' bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen min-w-screen'> 
            <Navbar/>
            <TimeLine/>
            <div className='grid grid-cols-3 gap-4 ml-10 mt-8  md:auto-cols-min'>
            <div ><ProjectCard/></div>
            <div ><ProjectCard/></div>
            <div ><ProjectCard/></div>
            <div ><ProjectCard/></div>
            <div ><ProjectCard/></div>
            <div ><ProjectCard/></div>
            </div>
           
    </div>
  )
}