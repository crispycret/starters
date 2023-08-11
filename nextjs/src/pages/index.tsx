
import { useMobile } from 'eternite/hooks';
import { useEffect } from 'react';


export const Home = () => {

    // let mobile = false // SSR Rendering
    // if (typeof window !== "undefined") // Client-side-only code



    const mobile = useMobile()

    return (
        <div className='text-center my-5'>
            <h1>Home</h1>

            <p>Is {mobile ? '': 'Not'} on Mobile</p>
        
        </div>
    )
}


export default Home;