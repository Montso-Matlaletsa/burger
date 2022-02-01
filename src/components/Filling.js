/* eslint-disable no-unreachable */
import React, {useState} from 'react';


export default function Filling(props) {

    const [showResults, setShowResults] = useState(true)

    const EatFilling = ()=>{
        setShowResults(false)
    }

    const styles ={
        title:{
            verticalAlign: 'middle',
            top: '50%',
            transform: 'translate(0, -50%)',
            position: 'relative',
            color: 'white',
        },
        hide :{
            display: 'none'
        }

}

  return (
      <>
      { showResults ?
            <div style={props.style} onClick={EatFilling} >
                <h4 style={styles.title} >{props.title}</h4>
            </div>
        : null }
      </>
        
  );

}


