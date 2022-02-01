/* eslint-disable no-unreachable */
import React, {useState} from 'react';

export default function Bottom() {

    const [showResults, setShowResults] = useState(true)

    const EatFilling = ()=>{
        setShowResults(false)
    }

  return (
      <>
      { showResults ?
            <div style={styles.topping} onClick={EatFilling} >
                <h4 style={styles.title} >{''}</h4>
            </div>
        : null }
      </>
  );

}

const styles ={
    topping:{
    backgroundColor: '#F2A93B',
    textAlign: 'center',
    width: '40%',
    height: 80,
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: '0px 0px 20px 20px'
    
},title:{
    verticalAlign: 'middle',
    top: '50%',
    transform: 'translate(0, -50%)',
    position: 'relative'
}

}
