import React from "react";

export default class InputBlock extends React.Component {
    render() {
        const { code } = this.props
        console.log("====", code)
        return (
            code.source.length ? <div className="input-container">{
                code.source.map((codeText, index) => {
                    return <div className="input" key={index}>{codeText}</div>
                })
            }</div> : null
        )

    }

}