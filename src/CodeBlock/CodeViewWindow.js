import React from "react";
import InputBlock from "./InputBlock"
import OutputBlock from "./OutputBlock";
import styles from "./CodeBlock.css"

export default class CodeViewWindow extends React.Component {

    render() {
        const { data } = this.props;
        return (
        //    <div className="codeBlockContainer">

        <div className={styles.codeBlockContainer}>
        {(data && data.cells.length) ? data.cells.map((code, index) => {
                return (<div className="codeBlock"key={index}>

                    <InputBlock
                        code={code}
                    />
                    <OutputBlock
                        code={code}
                    />
                </div>)
            }) : null}
           </div>
        )
    }
} 