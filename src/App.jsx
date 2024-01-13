import React from 'react'
import Users from './assets/Users'
import Posts from './assets/Posts'
import Todos from './assets/Todos'
import Album from './assets/Album'
import './assets/Users.scss'

const App = () => {
  return (
    <div className='container'>
      <Users />
      <Posts />
      <Todos />
      <Album />
    </div>
  )
}

export default App