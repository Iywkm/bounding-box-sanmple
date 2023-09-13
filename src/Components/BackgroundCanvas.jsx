import React, { useEffect } from "react";
import "../layout/canvas.css";

const BackgroundCanvas = ({
	refCanvasBackground,
	width,
	height,
	canvasHandler,
	rectList,
}) => {
	useEffect(() => {
		if (refCanvasBackground?.current) {
			const ctx = canvasHandler.redrawContext(
				refCanvasBackground.current,
				-100,
				-100,
				width + 100,
				height + 100
			);
			if (ctx) {
				if (rectList) {
					rectList.forEach((points) => {
						canvasHandler.drawFillRect(ctx, points.start, points.end, "white");
					});
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refCanvasBackground, width, rectList]);

	return (
		<canvas
			className="canvas canvas-background"
			ref={refCanvasBackground}
			width={width}
			height={height}
		>
			Canvas - Background image
		</canvas>
	);
};

export default BackgroundCanvas;
