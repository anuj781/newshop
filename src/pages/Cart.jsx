import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
  let ctx = useContext(CartContext);

  const handleDelete = (obj,i) => {
    console.log(obj);
    console.log(i);
    let copyArr = [...ctx.cartArr]
     copyArr.splice(i,1);
     ctx.setcartArr(copyArr);
  }


  const handleIncrease = (obj,i) => {
    console.log(i);
   obj.price = obj.price + (obj.price/obj.quantity)
   obj.quantity = obj.quantity+1;

   console.log(obj);
   let copyArr = [...ctx.cartArr]
   copyArr[i] = obj
   ctx.setcartArr(copyArr);
  }

  const handleDecrease = (obj,i) => {
    console.log(i);
  if(obj.quantity>1){
    obj.price = obj.price - (obj.price/obj.quantity)
    obj.quantity = obj.quantity-1;
 
    console.log(obj);
    let copyArr = [...ctx.cartArr]
    copyArr[i] = obj
    ctx.setcartArr(copyArr);
  }
  }
  
  


  return (
    <div>
     

<div className="  bg-white overflow-x-auto mt-[90px] ">
  <table className="w-full border-4 bg-white text-center border-green-400 text-black text-sm  rtl:text-right ">
    <thead className="text-xs">
      <tr>
        <th scope="col" className="px-6 py-3">
          Sno
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 py-3">
      
        </th>
      </tr>
    </thead>
    <tbody>
     {
      ctx.cartArr.map((ele,i)=>{
        return  <tr className="bg-w border-b border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
          {i+1}
        </th>
        <td className="px-6 py-4">
          <img src={ele.thumbnail} className='w-[100px] m-auto h-[100px]' alt="" />
        </td>
        <td className="px-6 py-4">
          {ele.price.toFixed(2)}
        </td>
        <td className="px-6 py-4 flex mt-7 ">
          <button onClick={()=> handleIncrease(ele,i)} className='bg-blue-700 rounded-md px-3 py-2 text-white mx-1'>+</button>
           <div className='mt-2'>{ele.quantity} </div>
          <button onClick={()=> handleDecrease(ele,i)} className='bg-green-700 rounded-md px-3 py-2 text-white mx-1'>-</button> 
        </td>
        <td>
          <button onClick={()=> handleDelete(ele,i)} className='bg-red-700 text-white hover:bg-red-600 px-3 py-2 rounded-md'>Delete</button>
        </td>
      </tr>
      })
     }
   
    </tbody>
  </table>
</div>


    </div>






  // return (
  //   <div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Sno</th>
  //           <th>product</th>
  //           <th>Title</th>
  //           <th>Quantity</th>
  //           <th>Price</th>
  //           <th></th>
  //         </tr>
  //       </thead>

  //       <tbody>
  //         {
  //           ctx.cartArr.map((ele,i)=>{
  //             return <tr>
  //               <td>{i+1}</td>
  //               <td><img src={ele.thumbnail} className='w-[70px] h-[70px]' alt="" /></td>
  //               <td>{ele.title}</td>
  //               <td>
  //                 <button className='bg-green-700 p-2 rounded-md'>+</button>
  //                 {ele.quantity}
  //                 <button className='bg-green-700 p-2 rounded-md'>-</button>
  //                 </td>
  //                 <td>{ele.price}</td>
                 
  //                 <td> <button className='bg-red-700 p-2 rounded-md'>delete</button></td>
  //             </tr>
  //           })
  //         }
  //       </tbody>
  //     </table>
  //   </div>
  )
}

export default Cart
