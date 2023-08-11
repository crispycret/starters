import { useEffect } from "react";
import { useMobile } from "eternite/hooks";

import { Spacer } from "@/components/basic/layout";
import SimpleScene from "@/components/basic/layout/scenes/SimpleScene";

import ContactForm from '@/components/examples/cordcuthelp/forms/ContactForm'
import { Contact } from '@/components/examples/cordcuthelp/Contact'



export const Scene2 = (entity: any) => {

    const { mobile } = useMobile()

    // Build the background image url from the entity data if it exists, otherwise use no image.
    const bgImage = entity ? require(`@/assets/images/${entity.bgImage}`).default.src : ''

    return (
        <SimpleScene props={{ ...entity, bgImage:bgImage }}>
            
            {!mobile ? <Spacer size={5} /> : <Spacer size={1} />}
            <ContactForm />
            {!mobile ? <Spacer size={5} /> : <Spacer size={3} />}
            
            <footer>
                <Spacer size={2} />
                <Contact /> 
                {mobile && <Spacer size={4} />}
            </footer>
        </SimpleScene>
    );
}
