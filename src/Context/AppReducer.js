export default (state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transctions:state.transctions.filter(transctions=>transctions.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transctions:[action.payload,...state.transctions]
            }
        default :
        return state;
    }
}