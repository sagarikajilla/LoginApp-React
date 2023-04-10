// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedOut: true}

  statusChange = () => {
    this.setState(prevState => ({isLoggedOut: !prevState.isLoggedOut}))
  }

  render() {
    const {isLoggedOut} = this.state
    const headingText = isLoggedOut ? 'Please Login' : 'Welcome User'

    return (
      <div className="bg">
        <div className="card">
          <Message headingText={headingText} />
          {isLoggedOut ? (
            <Login function1={this.statusChange} />
          ) : (
            <Logout function2={this.statusChange} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
