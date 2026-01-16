import { useEffect } from 'react'
import ContactPage from './ContactForm'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Acurve"
    }, [])
    return (
        <div>
                <ContactPage />
        </div>
    )
}

export default Contact
