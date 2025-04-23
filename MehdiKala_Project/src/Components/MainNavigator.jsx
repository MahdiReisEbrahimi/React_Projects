import { Link } from "react-router-dom"

export default function MainNavigator(){

    return <div className="fixed buttom-0 left-0 right-0">
        <Link to={'/'} className="cursor-pointer p-3 ">Home</Link>
        <Link to={'product'}>Products</Link>
    </div>
}