export function FetchUser(){
    return function(dispatch){
        dispatch({type:"fetch_user_start"})

        setTimeout(()=>{
            const fakeUser = {name:"asif", age:22};
            dispatch({type:"fetch_user_success",payload:fakeUser})
        },2000)
    }
}

//fetch data

 