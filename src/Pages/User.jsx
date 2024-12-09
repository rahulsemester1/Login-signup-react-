import React from 'react'

import { useParams } from 'react-router-dom';

function User() {
  let {userId}=useParams();
  return (
    <div>Welcome :{userId}</div>
  )
}

export default User