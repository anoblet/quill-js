import { LitElement } from "lit-element";
import "quill-form";
export declare class QuillJs extends LitElement {
    static styles: import("lit-element").CSSResult[];
    render: any;
    name: string;
    value: string;
    editor: HTMLElement;
    quill: any;
    boundedEventListener: any;
    constructor();
    createRenderRoot(): Element | ShadowRoot;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    onBlur(): void;
}
