import React from 'react'

const SaveAndContinue = ({nextTab}) => {
  
  

  return (
    <div>
      <button onClick={nextTab} className="mt-7 border border-green-400 bg-green-300 px-5 py-2 rounded-2xl hover:border-green-600  transition-colors ext-white">Save and Continue</button>
    </div>
  )
}

export default SaveAndContinue
