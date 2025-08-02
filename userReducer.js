// const initialUser = {
//   name:"asif",
//   loggedIn:false,
// };

 

// function useReducer(state = initialUser,action){
//   switch(action.type){
//     case 'login':
//       return {...state,loggedIn:true};
//       case 'logout':
//         return {...state,loggedIn:false}
//         default:
//           return state;
//   }

// }

const initialState = {
    loading:false,
    user:null,
    error:null,
};

function userReducer(state=initialState,action){
    switch(action.type){
        case "fetch-user-start":
            return {...state,loading:true,error:null};
            
            case "fetch_user_success":
                return {loading:false,user:action.payload,error:null};

                case "fetch_user_error":
                    return {laoding:false,user:null,error:action.payload};

                    default:
                        return state;
    }
}

export default userReducer;