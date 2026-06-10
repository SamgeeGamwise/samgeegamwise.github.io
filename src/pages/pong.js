import * as React from "react"
import { Link } from "gatsby"

export default function PongPage() {
  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "/games/pong/mq_js_bundle.js"

    script.onload = () => {
      window.load("/games/pong/pong.wasm")
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p>
        <Link to="/projects/">← Back to Projects</Link>
      </p>

      <h1>Pong</h1>

      <p>
        A Pong-style game built in Rust with Macroquad and compiled to WebAssembly.
      </p>

      <section
        style={{
          border: "1px solid #444",
          borderRadius: "8px",
          overflow: "hidden",
          background: "black",
          aspectRatio: "16 / 9",
        }}
      >
        <canvas
          id="glcanvas"
          tabIndex={0}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            background: "black",
          }}
        />
      </section>
    </main>
  )
}