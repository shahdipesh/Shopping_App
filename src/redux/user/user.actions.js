 const setCurrentUser=(user)=>{
  return   {
    type:'SET_CURRENT_USER',
    payload:user
}
}
export const logout=()=>{
    return   {
      type:'LOGOUT',
  }
  }

export default setCurrentUser