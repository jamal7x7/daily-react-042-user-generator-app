import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>User Generator App </h1>
  </header>
)

const Main = (props) => (
  <div className='main'>

    

  </div>
)

const Menu = () => (
  <div className='menu'>
    

     

  </div>
)

class UserGeneratorApp extends Component {
  
  state = {
    
  }

  handleClick = () => {
     
     

  }

  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Menu />
        <Main 
          handleClick={this.handleClick}
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <UserGeneratorApp />

  </div>
)

export default App

