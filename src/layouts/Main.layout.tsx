import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout(props: any) {
  return (
    <div>
      <h1>React redux thunk typesript boilerplate</h1>
      <p>Go back to <Link to="/">Example</Link></p>
      {props.children}
    </div>
  )
}

export default MainLayout
