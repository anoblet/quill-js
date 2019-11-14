import { LitElement } from "lit-element";
import "quill-form";
export declare class QuillJs extends LitElement {
    static styles: import("lit-element").CSSResult[];
    render: any;
    name: string;
    editor: HTMLElement;
    quill: any;
    createRenderRoot(): Element | ShadowRoot;
    firstUpdated(): void;
}
