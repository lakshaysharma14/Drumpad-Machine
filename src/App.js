import React, { Component } from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js'


class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state={
      display:"If you've got a problem, take it out on a drum"
    }
  }
  
  handleDisplay =(d)=>
  {
    this.setState({
      display:d
    })
  }

  newline =(sno)=>
  {
    for(var i={sno};i<=9;i++)
    {   
        if(i%3===0)
        {
            return(
            <br />
            )
        }
    }
        
  }



  render() 
  {
    const data = 
    [
      { sno:1, id: 'Snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
      { sno:2, id: 'Bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
      { sno:3, id: 'Bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
      { sno:4, id: 'Tom Tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
      { sno:5, id: 'Bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
      { sno:6, id: 'Shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
      { sno:7, id: 'High Hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
      { sno:8, id: 'Drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
      { sno:9, id: 'Laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
    ]

    return (
      <div className="cardbg">
      <div className="card z-depth-5 teal darken-4">
      <span className="card-title white-text text-darken-4"></span>




      <div id="drum-machine">
        
        <h1 className="card-panel #212121 green-text grey darken-4">Drumpad Machine</h1>
        
        <div id="display" className="center-align card-panel #ffee58 yellow lighten-1" >
        
            <h4>{this.state.display}</h4>
         
        </div>  
        
        <div id='drum-pads' className="col s6 container center-align ">
        
            <div className="row container">
            <div className="col s12 m8">
            <div className="card #000000 black">
            <div className="card-content white-text">
            <span classn="card-title">Drumpad</span>
            <span><br /></span>

            {data.map((d) => (
              <Drumpad
                sno={d.sno}
                key={d.id}
                id={d.id}
                letter={d.letter}
                src={d.src}
                handleDisplay={this.handleDisplay}
                nl={this.newline}
              />   
            ))}
            
            </div>  
            </div>
            </div>
            </div>
      
        </div>
            
            </div>
            </div>
            </div>
         
       
    );
  }
}

export default App;
