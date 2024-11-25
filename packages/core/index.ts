import { makeInstaller } from "@yxzq-element/utils"
import components from "./components"
import '@yxzq-element/theme/index.css'

const installer = makeInstaller(components)

export * from "@yxzq-element/components"
export default installer