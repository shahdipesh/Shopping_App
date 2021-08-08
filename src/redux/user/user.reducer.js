import firebase from 'firebase/app';
const initialState = {
     currentUser:null
}

const userReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_CURRENT_USER':
        return {
             ...state, 
            currentUser:{payload} 
        }
        case 'LOGOUT':
            firebase.auth().signOut();
            return {   
                currentUser:null
            }   

    default:
        return state
    }
}
export default userReducer;
