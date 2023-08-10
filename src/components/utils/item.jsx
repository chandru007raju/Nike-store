import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setAddItemToCart ,setOpenCart} from '../../app/CartSlice'

const Item = ({ifExists,id,color,shadow,title,text,img,btn,rating,price}) => {
    const dispatch=useDispatch();
    const onAddToCart=()=>{
        // console.log(99)
        // setTimeout(function(){alert("Ginktage.com")},10000);
        const item={ id,title, text, img, color, shadow, price}
        dispatch(setAddItemToCart(item))
    }   
    const onCartToggle=()=>{
        dispatch(setOpenCart({
            cartState:true
        }))
    }
    // const alertClick=()=>{
        // setTimeout(function(){alert("Ginktage.com")},1000);
    // }


    return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists?'justify-items-start ':'justify-items-center'} px-5 py-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
        <div className={`grid items-center ${ifExists?'justify-items-start':'justify-center'}`}>
            
            <h1 className=' text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
            <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>
            
            <div className='flex items-center justify-between w-28 my-2 '>
                <div className='flex items-center bg-white/80 px-1 rounded'><h1 className='text-black text-sm blur-effect-theme font-medium'>${price}</h1></div>
                <div className='flex items-center gap-1'><StarIcon className='icon-style font-medium w-5 h-5 md:w-4'/><h1 className='text-sm md:text-sm font-normal text-slate-100'>{rating}</h1></div>
            </div> 
        
            <div className='flex items-center gap-3'>
                <button type='button' className=' bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200' onClick={onAddToCart}><ShoppingBagIcon className='icon-style text-slate-900' /></button>
                <button type='button' className='bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm z-[10] text-black' onClick={()=>{onAddToCart(); onCartToggle();}}>{btn}</button>
            </div>

        </div>

        <div className={`${ifExists?'absolute top-5 right-1 ':'justify-center'} flex items-center`}>
            <img src={img} alt={`img/item-img/${id}`} className={`h-36 w-64 translate-theme hover:-rotate-12 ${ifExists?' lg:w-56 md:w-48 -rotate-[35deg] xsm:w-20 xsm:h-16 ':'h-36 w-64'}`}/>
        </div>

    </div>

  )
}

export default Item