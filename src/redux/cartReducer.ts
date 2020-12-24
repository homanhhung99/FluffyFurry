const initStore = [];
//{productId:string,count:number}

export default function reducer(state = initStore, action) {
  let newState = [...state];
  const productIndex = newState.findIndex(
    (value) => value.productDetail.name === action.payload.name,
  );
  switch (action.type) {
    case 'INCREMENT':

      if (productIndex < 0) {
        newState.push({productDetail: action.payload, count: 1});
      } else newState[productIndex].count++;
      //If productId not exist => create new one {productId:string,count:1}
      // console.log(newState)
      return newState;
      case 'DELETE':
        console.log(productIndex)
        const productIndex3 = newState.findIndex(
          (value) => value.productDetail.name === action.payload.name,
        );
  
        console.log(productIndex3);
        if (productIndex3 >= 0) {
          newState[productIndex3].count--;
          if(newState[productIndex3].count ==0) {
            return newState.filter(value => value.productDetail.name !== action.payload.name)
          }
        }
        
        return newState;
    default:
      return state;
  }
}
