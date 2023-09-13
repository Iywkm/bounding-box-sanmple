export class CanvasHandler {
	redrawContext(canvas, x, y, w, h) {
		const context = canvas.getContext("2d");
		if (context) {
			context.clearRect(x, y, w, h);
		}
		return context;
	}

	drawStrokeRect = (ctx, start, end, color) => {
		ctx.lineWidth = 2;
		ctx.setLineDash([4, 4]);
		ctx.strokeStyle = color;
		ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
	};

	drawFillRect = (ctx, start, end, color) => {
		ctx.fillStyle = color;
		ctx.fillRect(start.x, start.y, end.x - start.x, end.y - start.y);
	};

	getPoint(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		return { x, y };
	}
}

export default CanvasHandler;
