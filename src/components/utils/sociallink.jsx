import React from 'react'

const SocialLink = ({icon}) => {
  return (
    <>
      <img
        src={icon}
        alt={icon.social}
        className="sociallinkclass1"
      />
    </>   
    )
}

export default SocialLink