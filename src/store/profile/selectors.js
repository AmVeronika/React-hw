export const getUsers = (state) => state.users.usersList
export const getUser = (id) => ((state) => state.users.usersList[id])
export const getUserId = ((state) => state.users.usersList[state.users.usersList.length-1].id)