
import { useMobile } from "eternite/hooks";
import { Spacer } from "@/components/basic/layout"
import { Container } from "@/lib/bootstrap";

export const SimpleScene = ({props, children}: any) => {
    // export const SimpleScene = ({entity, children}: any) => {
        // export const SimpleScene = ({title, bgImageUrl, children}: any) => {

    const { mobile } = useMobile()

    console.log('\n\nSimpleScene.tsx')
    console.log(props)
    let bgImage = props && props.bgImage ? `url(${props.bgImage})` : ''

    console.log(bgImage)

    return (
        <div className='min-vh-100 w-100' style={{
            backgroundImage: bgImage, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Container>

                {!mobile ? <Spacer size={5} /> : <Spacer size={1} />}

                <Spacer size={5} />
                <h1 className='h1'>{ props && props.title ? props.title : '' }</h1>
                <Spacer size={3} />

                { children }

                {!mobile ? <Spacer size={5} /> : <Spacer size={3} />}
            </Container>
        </div>
    );
}


export default SimpleScene;
