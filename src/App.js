import Topping from './components/Topping'
import Bottom from './components/Bottom'
import Filling from './components/Filling'

function App() {

  const style = {

    tomato:{
      backgroundColor: '#EA3323',
      textAlign: 'center',
      width: '40%',
      height: 70,
      justifyContent: 'center',
      margin: 'auto',
    
  },
  meat:{
      backgroundColor: '#814133',
      textAlign: 'center',
      width: '40%',
      height: 70,
      justifyContent: 'center',
      margin: 'auto',
  },
    lettuce:{
      backgroundColor: '#377E22',
      textAlign: 'center',
      width: '40%',
      height: 70,
      justifyContent: 'center',
      margin: 'auto',
  }
  }
  return (
      <div style={container}>
        <Topping />
        <Filling title="Tomato" style={style.tomato} />
        <Filling title="Meat" style={style.meat} />
        <Filling title="Lettuce" style={style.lettuce} />
        <Bottom/>
      </div>
  );
}

export default App;

const container = {
    marginLeft: 'auto',
    marginRight: 'auto',
    
}