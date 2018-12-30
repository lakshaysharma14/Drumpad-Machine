import React, { Component } from 'react';

class Drumpad extends React.Component 
{
  componentDidMount() 
  {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
  componentWillUnmount() 
  {
     document.removeEventListener('keydown', this.handleKeydown)
  }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  
  
  render() {
    return (
        <div className='drum-pad waves-effect waves-light btn-large btn-floating btn-large cyan pulse' id={this.props.id} onClick={this.handleClick} >

                <button >{this.props.letter}</button>
                
                <audio 
                    className='clip' 
                    id={this.props.letter} 
                    src={this.props.src} 
                    ref={ref => this.audio = ref}>
                </audio>
            
           

      </div>
    )
  }
}

export default Drumpad;