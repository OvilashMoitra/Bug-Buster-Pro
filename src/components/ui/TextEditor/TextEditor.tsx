import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({content,setContent}:{content:string,setContent:(text:string)=>void}) => {
	const editor = useRef(null);
	
	return (
		<JoditEditor
			ref={editor}
			value={content}
			onBlur={newContent => setContent(newContent)}
			onChange={newContent => {}}
		/>
	);
};

export default TextEditor;