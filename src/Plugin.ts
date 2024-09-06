import { LazyCanvasPlugin as Plugin, LazyCanvas } from "@hitomihiumi/lazy-canvas";

export class LazyCanvasPlugin extends Plugin {
    private lazycanvas: LazyCanvas | null;

    constructor() {
        super();

        this.lazycanvas = null;
    }

    public onload(lazycanvas: LazyCanvas): void {
        this.lazycanvas = lazycanvas;
        Object.assign(lazycanvas, {
            getCanvas: this.getCanvas.bind(this)
        });
    }

    public unload(lazycanvas: LazyCanvas): void {
        this.lazycanvas = null;

        console.log("Plugin unloaded!");
    }

    private getCanvas(): LazyCanvas | null {
        return this.lazycanvas;
    }
}