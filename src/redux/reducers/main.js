import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  miniActive: false,
  users: [],
  showSetting: false,
  registerDetail: false
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case ActionTypes.miniActive:
            return ({
                ...state,
                miniActive: action.payload
            });
        case ActionTypes.addUser:
            return ({
                ...state,
                users: [...state.users.concat(action.payload)]
            })
        case ActionTypes.deleteUser:
            return ({
                ...state,
                users: [...state.users.filter((user) => user.login !== action.payload)]
            })
        case ActionTypes.showSetting:
            return ({
                ...state,
                showSetting: action.payload
            })
        case ActionTypes.registerDetail:
            return ({
                ...state,
                registerDetail: action.payload
            })
        default:
            return state;
    }

}