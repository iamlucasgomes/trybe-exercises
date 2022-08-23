import React from "react";

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <textarea value={value} name="text" id="coments" onChange={handleChange} />
      </div>
    );
  }
}

export default TextArea;
