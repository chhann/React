import React, {Component} from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// 필터링된 값을 테이블로 출력
export class ProductTable extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const {products}= this.props
        
        // producs 배열에 있는 객체중에서
        // Sporting Gods 값을 가진 객체 배열
        const sportngProducts = products.filter(
            (product)=>product.category === "Sporting Goods"
        );
        // Electronics 값을 가진 객체 배열
        const electProducts = products.filter(
            (product)=>product.category === "Electronics"
        );

        return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    <ProductCategoryRow category="Sporting Goods"/>
                    
                    {
                        // prodcuts의 category중 'Spoting Good'를
                        // 가진 배열을 만다는 방법
                        // filer를 이요해서 내용을 작성하고
                        // <productRow/>통해서 내용출력하기
                        sportngProducts.map(
                            (product, index)=>
                        <ProductRow
                            key={index}
                            name={product.name}
                            price={product.price}
                        />)
                    }

                    <ProductCategoryRow category="Electronics"/>

                    {
                        electProducts.map(
                            (product, index)=>
                        <ProductRow
                            key={index}
                            name={product.name}
                            price={product.price}
                        />)    
                    }
                </tbody>
            </table>
        </div>
        )
    }
}

export default ProductTable