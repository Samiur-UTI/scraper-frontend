import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Table() {
  const {state} = useLocation()
  return (
    <div>This is Result Table</div>
  )
}
