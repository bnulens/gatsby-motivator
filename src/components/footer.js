import React from "react"

const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <>
      <p>{thisYear}</p>
    </>
  )
}

export default Footer
