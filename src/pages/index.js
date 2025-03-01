import * as React from "react"
import Layout from "../components/template/Layout"

const IndexPage = () => {
  
  return (
    <>
    <Layout>
      <h1 className="text-4xl text-center">Home Page</h1>
    </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
