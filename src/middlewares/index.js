export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'darenas', url: '' }, ...actionInfo.action.payload]
  const updateActionInfo = {
    ...actionInfo,
    action: { ... actionInfo.action, payload: featured },
  }

  next(updateActionInfo);
}
