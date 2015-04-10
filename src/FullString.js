import React, {Component} from 'react'
import s from 'react-prefixr'

const styles =
  { position: 'absolute'
  , top: '50%'
  , left: '50%'
  , transform: 'translate(-50%, -50%)'
  }

class FullString extends Component {

  constructor(props){
    super(props)
    this.state = {pos: -1}
  }

  componentWillAppear(cb){
    setTimeout(cb, 50)
    this.setState({pos: -1})
  }

  componentDidAppear(){
    this.setState({pos: 0})
  }

  componentWillEnter(cb){
    setTimeout(cb, 50)
    this.setState({pos: -1})
  }

  componentDidEnter(){
    this.setState({pos: 0})
  }

  componentWillLeave(cb){
    setTimeout(cb, 50)
    this.setState({pos: 1})
  }

  componentDidLeave(){
  }

  render(){

    const {props, state} = this

    return (
      <span style={styles}>
        { props.string.split('')
            .map((char, index) => {

              const charStyles =
                { display: char !== ' ' ? 'inline-block' : 'inline'
                , transition: `${props.duration}s ${props.delay * index}s ${props.easing}`
                , transform: state.pos < 0 ? props.before : state.pos > 0 ? props.after : 'translate(0, 0)'
                , opacity: state.pos === 0 ? 1 : 0
                }


              return (
                <span key={props.string + char + index} style={charStyles}>
                  {char}
                </span>
              )
            })
        }
      </span>
    )
  }
}

FullString.propTypes =
  { string: React.PropTypes.string.isRequired
  , before: React.PropTypes.string.isRequired
  , after: React.PropTypes.string.isRequired
  , duration: React.PropTypes.number.isRequired
  , easing: React.PropTypes.string.isRequired
  , delay: React.PropTypes.number.isRequired
  }

FullString.displayName = 'FullString'

export default FullString