import {Component, createContext} from "react";
export const MyContext = createContext();

const colors = ['Blue', 'Yellow', 'Red']
class Provider extends Component {
  state = {
    index: 0,
    color: colors[0],
  }

  HandleChangeColor = () => {
    const { index } = this.state
    this.setState((prevState) => ({
  index: index < 2 ? prevState.index + 1 : 0
    }), () => this.setState({
      color: colors[index]
    }))
  }

  render() {
  const ContextValue = {
    ...this.state,
    HandleChangeColor: this.HandleChangeColor,
  }
  return (
    <MyContext.Provider value={ ContextValue  }>
      {this.props.children}
    </MyContext.Provider>
  );
}
}

export default Provider