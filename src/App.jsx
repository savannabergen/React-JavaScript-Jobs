import React from 'react'

const name = 'Savanna';
const styles = {
  color: 'red',
  fontSize: '55px'
}

const App = () => {
  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>hello {name}</p>
    </>
  )
}

export default App
