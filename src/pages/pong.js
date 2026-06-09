import * as React from "react"
import { useEffect } from "react"

export default function PongPage() {
  useEffect(() => {
    const shim = document.createElement("script")
    shim.src = "/games/pong/wbg_shim.js"
    shim.onload = () => {
      const bundle = document.createElement("script")
      bundle.src = "/games/pong/mq_js_bundle.js"
      bundle.onload = () => {
        window.load("/games/pong/Pong.wasm")
      }
      document.head.appendChild(bundle)
    }
    document.head.appendChild(shim)
    return () => {
      document.head.querySelectorAll(
        'script[src="/games/pong/wbg_shim.js"], script[src*="mq_js_bundle"]'
      ).forEach(s => s.remove())
    }
  }, [])

  return (
    <main style={{ width: "100vw", height: "100vh", margin: 0, background: "black", overflow: "hidden" }}>
      <canvas
        id="glcanvas"
        tabIndex={1}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </main>
  )
}

export const Head = () => <title>Pong — Samuel Krohn</title>