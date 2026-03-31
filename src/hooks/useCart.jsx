import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    // const [cart, setCart] = useState('Mobile 2')
    const axiosSecure = useAxiosSecure()

    const createCart = async () => {
        try {
            const res = await axiosSecure.post("/carts/")
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }

    return {
        createCart
    }
};

export default useCart;