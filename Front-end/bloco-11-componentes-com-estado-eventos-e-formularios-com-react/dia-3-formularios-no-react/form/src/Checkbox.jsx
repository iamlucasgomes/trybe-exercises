import React from "react";

class Checkbox extends React.Component {
  render() {
    const { handleChange } = this.props
    return (
      <div>
        <input onClick={handleChange} type="checkbox" name="checked" />Concorda com essas atrocidades?
      </div>
    )
  }
}

export default Checkbox;
