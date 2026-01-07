import Section from './Section'
import Container from './Container'
import { NavLink } from 'react-router'
import { Button } from '../ui/button'

const NotFoundPage = () => {
    return (
        <Section>
            <Container>
                <div className='space-y-5'>

                    <h1 className="lg:text-7xl md:text-5xl text-2xl">404! Not found</h1>
                    <NavLink to="/">
                        <Button className='cursor-pointer' variant="secondary">

                            Go to home page
                        </Button>
                    </NavLink>
                </div>

            </Container>
        </Section>
    )
}

export default NotFoundPage
