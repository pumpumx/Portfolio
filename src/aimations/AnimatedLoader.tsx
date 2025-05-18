// components/CanvasLoader.tsx
import { Html } from "@react-three/drei";

function CanvasLoader() {
  return (
    <Html fullscreen>
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div className="relative w-24 h-24 border-4 border-white rounded-full animate-spin-slow">
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </Html>
  );
}

export default CanvasLoader;
