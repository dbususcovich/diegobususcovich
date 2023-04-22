import { useState } from "react"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }

        
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Nombre y Apellido'  value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder='Telefono' required value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input placeholder='E-mail' required  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button>Generar orden</button>
        </form>
    )
}

export default ContactForm