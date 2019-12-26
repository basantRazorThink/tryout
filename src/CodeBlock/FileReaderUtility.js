import React from "react";

const CodeBlock = (props) => {
    let fileReader;



    const handleFileRead = e => {
        const content = fileReader.result;
        props.handleFileContent(JSON.parse(content));
    }

    const handleChosenFile = file => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }


    return (<div className="fileInputContainer">

<input type="file" onChange={e => handleChosenFile(e.target.files[0])} />
    </div>
    )

}

export default CodeBlock;