/* eslint-disable no-unreachable */
import React from 'react';

export default function Filling(props) {

    const styles ={
        title:{
            verticalAlign: 'middle',
            top: '50%',
            transform: 'translate(0, -50%)',
            position: 'relative',
            color: 'white',
        }

}

  return (
        <div style={props.style} >
            <h4 style={styles.title} >{props.title}</h4>
        </div>
  );

}


