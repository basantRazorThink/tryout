import React from "react";

export default class OutputBlock extends React.Component {


   checkOutputType = e => console.log(e)

    render() {
        const { code } = this.props;
        // console.log("=========", code)
        return (
            code.outputs.length ? <div className="output-container">
                {code.outputs[0].text.map( (codeText, index) => {
                return (<div className="output" key={index}>{codeText}</div>)
                })}
            </div> : null
        )
    }
}