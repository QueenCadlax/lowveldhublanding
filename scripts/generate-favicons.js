const fs = require("fs")
const path = require("path")
const { Resvg } = require("@resvg/resvg-js")

const publicDir = path.join(__dirname, "..", "public")
const svgPath = path.join(publicDir, "icon.svg")
const svg = fs.readFileSync(svgPath, "utf8")

const sizes = [16, 32, 48, 180]

function exportPng(name, width) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    background: null,
  })
  const png = resvg.render()
  const outPath = path.join(publicDir, name)
  fs.writeFileSync(outPath, png.asPng())
  console.log(`Written ${outPath}`)
}

exportPng("favicon-16x16.png", 16)
exportPng("favicon-32x32.png", 32)
exportPng("favicon-48x48.png", 48)
exportPng("apple-icon.png", 180)
exportPng("icon-light-32x32.png", 32)
exportPng("icon-dark-32x32.png", 32)
console.log("Favicon generation complete.")
