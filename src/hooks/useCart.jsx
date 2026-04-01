import { useCallback, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const [cart, setCart] = useState(null)
    const [cartId, setCartId] = useState(()=>localStorage.getItem("cartId"))
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const axiosSecure = useAxiosSecure()

    const createOrGetCart = useCallback(
        async () => {
        setLoading(true)
        try {
            const res = await axiosSecure.post("/carts/")
            if(!cartId){
                localStorage.setItem('cartId', res.data.id)
                setCartId(res.data.id)
            }
            setCart(res.data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    },[cartId])

    const addToCartItems = useCallback(async(product_id, quantity)=>{
        if(!cartId) await createOrGetCart();
        setErrMsg("")
        setLoading(true)
        try{
            const res = await axiosSecure.post(`/carts/${cartId}/items/`,{
                product_id, quantity
            })
            return res.data
        }catch(err){
            setErrMsg(err)
        }finally{
            setLoading(false)
        }
    },[createOrGetCart, cartId])

    return {
        createOrGetCart,
        addToCartItems,
        loading,
        cart,
        errMsg
    }
};

export default useCart;