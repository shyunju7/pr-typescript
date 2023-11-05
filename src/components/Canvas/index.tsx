import { useEffect } from "react";
import "./style.scss";
const Canvas = () => {
  const CANVAS_WIDTH = 1024;
  const CANVAS_HEIGHT = 668;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let isDragging = false;

  const init = () => {
    canvas = document.querySelector("#canvas") as HTMLCanvasElement;

    // 이벤트 리스너 추가
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerDrag);

    // context 객체
    ctx = canvas.getContext("2d");

    if (!ctx) return;

    // 그리기 설정
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

  useEffect(() => {
    init();

    return () => {
      // 이벤트 리스너 제거
      canvas.removeEventListener("pointerDown", handlePointerDown);
      canvas.removeEventListener("pointerUp", handlePointerUp);
      canvas.removeEventListener("pointerMove", (e) => handlePointerDrag);
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas" width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      <div className="color-wrapper">
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
      </div>
    </div>
  );
};

export default Canvas;
