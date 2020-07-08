import React from 'react';
import './shop.data.jsx'
import SHOP_DATA from './shop.data.jsx';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class ShopPages extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} =this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                      <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export default ShopPages;