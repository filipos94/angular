export const onError = (state: any) => {
  return {...state, onError: true, isLoading: false}
}

export const onRequestAction = (state: any) => {
  return {...state, isLoading: true}
}

export const onSuccess = (state: any, payload: {}) => {
  return {...state, isLoading: false, onError: false, messages:payload}
}

export const onSuccess2 = (state: any, payload: any) => {
  return {...state, isLoading: false, onError: false, id:payload.id, username:payload.username}
}

export const onSuccess3 = (state: any) => {
  return {...state, isLoading: false, onError: false}
}
