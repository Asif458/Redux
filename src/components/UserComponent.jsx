import React from 'react'
import { FetchUser } from '../../userActions'
import { useSelector,useDispatch } from 'react-redux';

const UserComponent = () => {
    const dispatch = useDispatch();
    const {loading,user,error} = useSelector(state => state.user)
  return (
    <div>
      <h2> User Info</h2>

      <button onClick={()=> dispatch(FetchUser())}>fetch user</button>
      {loading && <p>loading...</p>}
      {user && <p>welcome,{user.name}</p>}
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default UserComponent
 