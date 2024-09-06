import { LazyCanvasPlugin } from "./Plugin";
import { LazyCanvas } from "@hitomihiumi/lazy-canvas";

export { LazyCanvasPlugin as Plugin };

declare module "@hitomihiumi/lazy-canvas" {
    interface LazyCanvas {
        getCanvas(): LazyCanvas | null;
    }
}