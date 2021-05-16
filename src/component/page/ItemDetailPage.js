import React,{useState,useEffect} from 'react';
import FilterBodyBoxGrid from '../FilterBodyBoxGrid'
import AddToShoppingCartIcon from '../icons/AddToShoppingCartIcon'
import ShoesGrid from '../ShoesGrid'
import {Link} from 'react-router-dom'
import LeftArrow from '../icons/LeftArrow'

function ItemDetailPage({shoesData,shoeName,putItemInTheCart}) {
    let [itemData, setItemData] = useState({})
    useEffect(()=>{
        if(shoesData!==undefined){
            shoesData.forEach((shoe)=>{
                if(shoe.shoeName === shoeName){
                    setItemData(shoe)
                }
            })
        }
    },[shoesData])
    return (
        <>
        <div className="itemContainer">
            <button className='goBackButton'><LeftArrow size={18} color={'rgb(150, 150, 150)'}/>{itemData.brand}</button>
            <h1>{itemData.shoeName}</h1>
            <img src={itemData.imageLinks} alt={itemData.brand}/>
            {/* <FilterBodyBoxGrid/> */}
            <div className="purchaseOptions">
                <Link className="purchase" to='/my/checkout' onClick={()=>putItemInTheCart({...itemData,selectedSize:5})}>
                Purchase
                </Link>
                <Link className="cart" onClick={()=>putItemInTheCart({...itemData,selectedSize:5})}>
                <AddToShoppingCartIcon size={35}/>
                </Link>
            </div>
            <div className="itemDescription">
                <h2>About this product</h2>
                <p>{itemData.description}</p>
            </div>
        </div>
        <ShoesGrid count={shoesData.length} showPrice={false} showHeader={true} headerContent={'related items'}
        shopButton={true} shoesData={shoesData}/>
        </>
    );
}

export default ItemDetailPage;