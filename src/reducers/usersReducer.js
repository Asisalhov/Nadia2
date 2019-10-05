import { GET_USERS, GET_TEAM_MEMBERS, ADD_TEAM_MEMBER } from "../actions/types";

const initialState = {
  users: [],
  team: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_TEAM_MEMBER:
      return {
        ...state,
        team: [action.payload, ...state.team]
      };
    case GET_TEAM_MEMBERS:
      return {
        ...state,
        team: action.payload
      };

    default:
      return state;
  }
}
