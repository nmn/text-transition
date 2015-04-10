import React, {Component} from 'react'
import TransitionGroup from 'react/lib/ReactTransitionGroup'
import FullString from './FullString'

class TextTransition extends Component {
  render(){
    return (
      <TransitionGroup>
        <FullString {...this.props} key={this.props.string} />
      </TransitionGroup>
    )
  }
}

TextTransition.propTypes =
  { string: React.PropTypes.string.isRequired
  , before: React.PropTypes.string.isRequired
  , after: React.PropTypes.string.isRequired
  , duration: React.PropTypes.number.isRequired
  , easing: React.PropTypes.string.isRequired
  , delay: React.PropTypes.number.isRequired
  }

TextTransition.displayName = 'TextTransition'

export default TextTransition