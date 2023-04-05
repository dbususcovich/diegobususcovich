import { useEffect, useState } from "react"
import { getCategories } from "../../asyncMock"

import { Link } from "react-router-dom"


const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(response => {
            setCategories(response)
        })
    }, [])
        
    return (
        <nav style={{ display:'flex', justifyContent: 'space-between', alignItems:'center', color: 'white', textdecoration:'none', background: 'blue',color: 'white', textDecoration:'none',  }}> 

            <Link to='/'>MateCitto</Link>
            <div>
                {                
                    categories.map(cat => {
                        return (
                            <Link style={{margin:'10px'}} key={cat.id} to={`/category/${cat.slug}`}>{cat.description}</Link>
                    )
                })
                }
            </div>
        </nav>
    )
}

export default NavBar