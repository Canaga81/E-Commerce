import './CSS/ShopCategory.css'
import ShopContext from '../Context/ShopContext'
import { useContext } from 'react'

const ShopCategory = (props) => {

  const all_product = useContext(ShopContext)

  return (
    <div className="shop-category">
      <img src={props.banner} alt="shop_image" />
    </div>
  )

}

export default ShopCategory