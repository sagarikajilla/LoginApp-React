// Write your code here
import './index.css'

const Message = props => {
  const {headingText} = props
  return <h1 className="heading">{headingText}</h1>
}
export default Message
