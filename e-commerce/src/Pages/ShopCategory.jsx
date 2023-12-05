import './CSS/ShopCategory.css'
import ShopContext from '../Context/ShopContext'
import { useContext } from 'react'
import drop_dowwn from '../Components/Assets/dropdown_icon.png'

const ShopCategory = (props) => {

  const all_product = useContext(ShopContext)

  return (
    <div className="shop-category">
      <img src={props.banner} alt="shop_image" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
      </div>

      <div className="shopcategory-sort">
        Sort by <img src={drop_dowwn} alt="dropdown_icon" />
      </div>
    </div>
  )

}

export default ShopCategory