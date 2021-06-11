import React,{useState,useEffect} from 'react'
import NavDesk from './NavDesk'
import NavMob from './NavMob'

export default function Navbar() {
  const [isMob,changeView]=useState(false)

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      changeView(window.innerWidth<=1700)
    })
  },)

  return (
    <div>
      {isMob && <NavMob />}
      {!isMob && <NavDesk/>}
    </div>
  )
}
