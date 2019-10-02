class App extends React.Component {
  state = {
    value: ``,
    opacity: 0.5,
    startText: `start`,
  }
  handleInpgit push -u origin masterutChange(e) {
  // console.log(e.target.value)
  this.setState({
    value: e.target.value,
    opacity: 1,
    startText: ``,
  })
}
handleResetClick = () => {
  this.setState({
    value: ``,
    startText: `zresetowano`,
  })
}
render() {
  return (
    <>
      <input value={this.state.value} placeHolder="please start typing" onChange={this.handleInputChange.bind(this)} type="text" />
      <button onClick={this.handleResetClick}>Reset</button>
      <h1 className="title">{this.state.startText}{this.state.value.toUpperCase()}</h1>
    </>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'));