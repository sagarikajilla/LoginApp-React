// Write your code here
import './index.css'

const Logout = props => {
  const {function2} = props
  return (
    <button className="button" onClick={function2}>
      Logout
    </button>
  )
}

export default Logout
