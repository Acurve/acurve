import { useEffect } from 'react'
import ContactPage from './ContactForm'
import { NavbarObserver } from '@/components/layout/NavbarObserver'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Acurve"
    }, [])
    return (
        <div>
            <NavbarObserver theme='dark'>

                <ContactPage />
            </NavbarObserver>
        </div>
    )
}

export default Contact
