import React, { useEffect } from "react"
import { Link } from "gatsby"

export default function PongPage() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const script = document.createElement("script")
    script.type = "module"
    script.innerHTML = `
      import init from "/games/pong/pong.js";
      init("/games/pong/pong.wasm");
    `

    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <main style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p>
        <Link to="/projects/">← Back to Projects</Link>
      </p>

      <h1>Pong</h1>

      <p>A Pong-style game built in Rust with Macroquad and compiled to WebAssembly.</p>

      <section
        style={{
          border: "1px solid #444",
          borderRadius: "8px",
          overflow: "hidden",
          background: "black",
          aspectRatio: "16 / 9",
          width: "100%",
        }}
      >
        <canvas
          id="bevy-canvas"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        />
      </section>
    </main>
  )
}