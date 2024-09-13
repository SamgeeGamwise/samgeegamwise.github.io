import * as React from "react"



const IndexPage = () => {
 const sendEmail = (e) => {
  e.preventDefault()
  
  fetch('https://kkwvehdtf6absgcda7uvbqi3vq0tpnhv.lambda-url.us-east-1.on.aws/', {
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({
    //   firstParam: 'yourValue',
    //   secondParam: 'yourOtherValue',
    // })
  })
  .catch(err => console.log(err))
  .then(res => console.log(res))
 }

  return (

<form>
  <button type="button" onClick={sendEmail}>Submit</button>
</form>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
