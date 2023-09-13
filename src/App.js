import { useState, useRef } from "react";
// import "./App.css";
import "./layout/canvas.css";
import EditorCanvas from "./Components/EditorCanvas";
import CanvasHandler from "./CanvasHandler";
import BackgroundCanvas from "./Components/BackgroundCanvas";

function App() {
	const refCanvasBackground = useRef(null);
	const refCanvasEditor = useRef(null);
	const [tmpStart, setTmpStart] = useState({ x: 0, y: 0 });
	const [tmpEnd, setTmpEnd] = useState(null);
	const [rectList, setRectList] = useState([]);
	const canvasHandler = new CanvasHandler();
	const width = 500;
	const height = 500;

	function trimImage() {
		if (tmpEnd) {
			const points = { start: tmpStart, end: tmpEnd };
			const list = [...rectList, points];
			setRectList(list);
			setTmpEnd(null);
		}
	}

	function undoTrim() {
		const list = [...rectList];
		list.pop();
		setRectList(list);
	}

	return (
		<div className="App">
			<button className="editor-button" onClick={trimImage}>
				Trim
			</button>
			<button className="editor-button" onClick={undoTrim}>
				Undo
			</button>
			<div className="canvas-wrap">
				<BackgroundCanvas
					refCanvasBackground={refCanvasBackground}
					width={width}
					height={height}
					canvasHandler={canvasHandler}
					rectList={rectList}
				/>
				<EditorCanvas
					refCanvasEditor={refCanvasEditor}
					width={width}
					height={height}
					canvasHandler={canvasHandler}
					start={tmpStart}
					setStart={setTmpStart}
					end={tmpEnd}
					setEnd={setTmpEnd}
				/>
			</div>
		</div>
	);
}

export default App;
