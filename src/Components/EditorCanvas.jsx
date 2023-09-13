import React from "react";
import { useEffect, useState } from "react";

function EditorCanvas({
	width,
	height,
	start,
	end,
	setStart,
	setEnd,
	canvasHandler,
	refCanvasEditor,
}) {
	const [mouseDown, setMouseDown] = useState(false);

	function onMouseDown(e) {
		setMouseDown(true);
		setEnd(null);
		const point = canvasHandler.getPoint(e);
		setStart(point);
	}

	function onMouseMove(e) {
		if (mouseDown) {
			const point = canvasHandler.getPoint(e);
			setEnd(point);
		}
	}

	function onMouseUp() {
		setMouseDown(false);
	}

	useEffect(() => {
		if (refCanvasEditor?.current) {
			const ctx = canvasHandler.redrawContext(
				refCanvasEditor.current,
				-10,
				-10,
				width + 20,
				height + 20
			);
			if (ctx && end) {
				canvasHandler.drawStrokeRect(ctx, start, end, "blue");
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [end, height, refCanvasEditor, width, start]);

	return (
		<canvas
			className="canvas canvas-editor"
			ref={refCanvasEditor}
			width={width}
			height={height}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
		>
			canvas-editer
		</canvas>
	);
}

export default EditorCanvas;
