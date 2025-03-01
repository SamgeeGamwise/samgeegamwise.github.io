import * as React from "react"
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Navbar />
        <main className="body">
          { children }
        </main>
      <Footer /> */}
    </>
  )
}

export default Layout