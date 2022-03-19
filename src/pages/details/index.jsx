import React from 'react'
import {useLocation} from 'react-router-dom'
export default function Details() {
  const {state} = useLocation()
  console.log(state);
  return (
    <div>Here the details will appear</div>
  )
}
