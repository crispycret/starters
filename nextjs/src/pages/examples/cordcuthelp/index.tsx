
import { useEffect } from 'react';

const content = require('@/assets/data/examples/cordcuthelp/home-page.json')

import { Spacer } from "@/components/basic/layout";
import { Landing, Scene1, Scene2 } from "@/components/examples/cordcuthelp/scenes/home";
import Footer from '@/components/examples/cordcuthelp/layouts/Footer';
import NavScroll from '@/components/examples/cordcuthelp/layouts/NavScroll';
import { useMobile, useTitle } from 'eternite/hooks';


export default () => {

    // List of components not yet JSX 
    const scenes: any[] = [
        Landing,
        Scene1,
        Scene2
    ]

    const { mobile } = useMobile()
    useTitle('Cord Cut Help | Home')

    useEffect(() => {
        //  Import WebFontLoader on the client side only. 
        // WebFontLoader is not compatible with server side rendering as 
        // it tries to use `window` on import.
        const WebFont = require('webfontloader');

        WebFont.load({
            google: {
                families: ['Droid Sans', 'Chilanka', 'Aktiv Grotesk']
            }
        });
    })

    // Transcribed from react project
    return (
        // App
        // reactProject/src/App.tsx
        <div className='App'>

            {/* Main Layout */}
            {/* reactProject/src/components/layouts/MainLayout.tsx */}
            <div className="d-flex flex-column min-vh-100">
                <NavScroll />

                {/* Main Layout - <main> */}
                <main className="flex-grow-1 d-flex"> 
                    {/* Content */}
                    {/* reactProject/src/pages/HomePage.tsx */}
                    <div className={` w-100 min-vh-100 bg-secondary text-white`}>

                        {/* Loop through the content entities and draw a scene using that entity data if there is a scene to draw. */}
                        {content.entities.map((entity: any, index: number) => {
                            return scenes.length > index ? (
                                <div key={index} className="">
                                    {/* Render the component and pass the entity data */}
                                    {scenes[index](entity)}
                                </div>
                            ) : ( <div key={index}></div> ) })
                        }
                        
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}




