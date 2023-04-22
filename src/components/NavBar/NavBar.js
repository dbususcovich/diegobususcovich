import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('order', 'desc'))

    getDocs(categoriesRef)
      .then(snapshot => {
        const categoriesAdapted = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
        })
        setCategories(categoriesAdapted)
      })
  }, [])

  console.log(categories)
  return (
    <nav className="NavBar" >
        <Link to='/'>MateCitto</Link>
        <div className="Categories">
          {
            categories.map(cat => {
              return <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            })
          }
            <NavLink to='/category/termo' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Termo</NavLink>
            <NavLink to='/category/mate' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mate</NavLink>
            <NavLink to='/category/otro' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Otro</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar