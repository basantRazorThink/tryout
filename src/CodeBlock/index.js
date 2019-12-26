import React from "react";
import FileReader from "./FileReaderUtility";
import CodeViewWindow from "./CodeViewWindow";
// import styles  from "./CodeBlock.css";

export default class CodeBlock extends React.Component {
    state = {
        fileContent: null
    }

    handleFileContent = e => {

        this.setState({
            fileContent: e
        })
    }

    render() {
        // console.log(this.state);
        const { handleFileContent } = this;
        const { fileContent } = this.state
        return (
            <>
                <FileReader
                    handleFileContent={handleFileContent}
                />
                <CodeViewWindow
                    data={fileContent}
                />
            </>


        )

    }
}