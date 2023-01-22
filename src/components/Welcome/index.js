// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  subStatus = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      return this.setState({status: 'Subscribed'})
    }
    return this.setState({status: 'Subscribe'})
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.subStatus}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
