import { useEffect, useRef } from "react";
import "./style.scss";
import { canvasColorData } from "../../dummy";
const Canvas = () => {
  const CANVAS_WIDTH = 1024;
  const CANVAS_HEIGHT = 668;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let ctx: CanvasRenderingContext2D | null;
  let isDragging = false;

  const init = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    // 이벤트 리스너 추가
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerDrag);

    // context 객체
    ctx = canvas.getContext("2d");

    // 그리기 설정
    if (!ctx) return;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
  };

  const handlePointerDown = () => (isDragging = true);
  const handlePointerUp = () => (isDragging = false);
  const handlePointerDrag = (e: PointerEvent) => {
    const { offsetX, offsetY } = e;
    if (!ctx) return;

    if (!isDragging) {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
      return;
    }
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const handleSetPenColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ctx) return;

    const target = e.target as HTMLButtonElement;
    const color = target.dataset.color;
    ctx.strokeStyle = color ?? "black";
  };

  useEffect(() => {
    // 이벤트 리스너 제거
    return () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerDrag);
    };
  }, []);

  init();

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        id="canvas"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
      <div className="color-wrapper">
        {canvasColorData &&
          canvasColorData.map((color: string) => (
            <button key={color} data-color={color} onClick={handleSetPenColor}>
              {color}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Canvas;
