import React from 'react'
import { Link } from 'react-router-dom';

function BlankLayout(props:any) : JSX.Element {
  return (
    <div>
      {props.children}
      <p>Blank layout, to go to items example <Link to="/items-dummy">click here .</Link></p>
    </div>
  )
}

export default BlankLayout