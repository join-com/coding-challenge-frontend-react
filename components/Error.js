const errorStyle = {
  color: 'red',
}
const Error = props => (
    <div style={errorStyle}>
      {props.text}
    </div>
  )
  
  export default Error