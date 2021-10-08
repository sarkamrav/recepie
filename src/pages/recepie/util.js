
export const cartitem = (item,currentitem)=>{
  // alert("hi");
  console.log("item",item);
  console.log("currentitem",currentitem);
const itemExist = item.find(item=>item.id===currentitem.id)

if(itemExist){
  return  item.map(item =>item.id === currentitem.id ? {...item,quantity:item.quantity+1}:item
    )
}
return [...item,{...currentitem,quantity:1}]
}

