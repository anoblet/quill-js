import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/component.ts",
  output: {
    file: "dist/component.js",
    format: "esm"
  },
  plugins: [
    commonjs(),
    resolve(),
    typescript()
  ]
};
