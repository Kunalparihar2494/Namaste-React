import React from 'react'
import ChildC from './ChildC'

function ChildB({data}) {
    console.log('Child B')
  return (
    <div>ChildB
        <div>
            <ChildC data={data}/>
        </div>
    </div>
  )
}

export default ChildB