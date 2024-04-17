import React from 'react'
import './App.css'

const App = () => {
  return (
    <button className="button" data-text="Awesome">
    <span className="actual-text">&nbsp;Ali&nbsp;Sami&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Ali&nbsp;Sami&nbsp;</span>
     </button>
    // <button className="button" data-text="Awesome">
    // <span className="actual-text">&nbsp;Ali&nbsp;Sami&nbsp;</span>
    // <span aria-hidden="true" className="hover-text">&nbsp;Ali&nbsp;Sami&nbsp;</span>
    //  </button>
  )
}

export default App
