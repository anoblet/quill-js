var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, query } from "lit-element";
import Quill from "quill";
import "quill-form";
import style from "./style";
import template from "./template";
import theme from "./assets/quill.snow.css";
let QuillJs = class QuillJs extends LitElement {
    constructor() {
        super(...arguments);
        this.render = template.bind(this);
    }
    createRenderRoot() {
        return this.hasAttribute("disable-shadow")
            ? this
            : super.createRenderRoot();
    }
    firstUpdated() {
        if (this.hasAttribute("disable-shadow")) {
            const constructor = this.constructor;
            constructor.styles.map(style => {
                const element = document.createElement("style");
                element.innerHTML = style.cssText;
                this.appendChild(element);
            });
        }
        var toolbarOptions = [
            ["bold", "italic", "underline" /*, "strike"*/],
            [{ list: "ordered" }, { list: "bullet" }],
            [/*"blockquote",*/ "code-block"]
            // [{ header: 1 }, { header: 2 }],
            /*[{ script: "sub" }, { script: "super" }],*/
            // [{ indent: "-1" }, { indent: "+1" }],
            // [{ direction: "rtl" }],
            // [{ size: ["small", false, "large", "huge"] }],
            // [{ header: [1, 2, 3, 4, 5, 6, false] }],
            // [{ color: [] }, { background: [] }],
            // [{ font: [] }],
            // [{ align: [] }],
            // ["clean"]
        ];
        this.quill = new Quill(this.editor, {
            modules: {
                form: {
                    htmlField: this.name,
                    deltaField: false,
                    textField: false,
                    submitKey: {
                        key: "S",
                        shortKey: true
                    },
                    updateOnBlur: true,
                    updateOnChange: false
                },
                toolbar: toolbarOptions
            },
            theme: "snow"
        });
    }
};
QuillJs.styles = [theme, style];
__decorate([
    property({ type: Text })
], QuillJs.prototype, "name", void 0);
__decorate([
    query("#editor")
], QuillJs.prototype, "editor", void 0);
QuillJs = __decorate([
    customElement("quill-js")
], QuillJs);
export { QuillJs };
