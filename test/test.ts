import { LazyCanvas } from "@hitomihiumi/lazy-canvas";
import { Plugin } from "../dist";

let canvas = new LazyCanvas({ plugins: [new Plugin()] }) as LazyCanvas;

console.log(canvas.getCanvas());