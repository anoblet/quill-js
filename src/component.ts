import { LitElement, customElement, property, query } from "lit-element";

import Quill from "quill";
import "quill-form";
import style from "./style";
import template from "./template";
import theme from "./assets/quill.snow.css";

@customElement("quill-js")
export class QuillJs extends LitElement {
  public static styles = [theme, style];
  public render = template.bind(this);

  @property({ type: Text }) name: string;

  @query("#editor") editor: HTMLElement;

  quill;

  createRenderRoot() {
    return this.hasAttribute("disable-shadow")
      ? this
      : super.createRenderRoot();
  }

  firstUpdated() {
    if (this.hasAttribute("disable-shadow")) {
      const constructor: any = this.constructor;
      constructor.styles.map(style => {
        const element = document.createElement("style");
        element.innerHTML = theme.cssText;
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
}
