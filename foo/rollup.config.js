import withSolid from "rollup-preset-solid"
import { resolve } from "path"

export default withSolid({
  input: resolve(__dirname, "lib/main.tsx"),
  targets: ["esm", "cjs"],
})
