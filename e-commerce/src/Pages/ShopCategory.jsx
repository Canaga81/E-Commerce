import './CSS/ShopCategory.css'
// import ShopContext from '../Context/ShopContext'
// import { useContext } from 'react'
import drop_down_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

import all_product from '../Components/Assets/all_product'

const ShopCategory = (props) => {

  // const { all_product } = useContext(ShopContext)
  // console.log(all_product);

  return (

    <div className="shop-category">
      <img className='shop-img' src={props.banner} alt="shop_image" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down_icon} alt="dropdown_icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              )
            }
            else {
              return null;
            }
          })
        }
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>

    </div>
  )

}

export default ShopCategory