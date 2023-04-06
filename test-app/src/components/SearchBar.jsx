import React, {Component} from 'react'

// 글자를 입력받아서 필터링하느 컴포넌트
export class SearchBar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {isOnlyStock, toggleStock} = this.props;
        return (
        <div>
            <input type="text" placeholder='Search...'/>
            <br />
            {/* checkbox/radio의 값을 가져올때 readOnly를 이용해서 바뀌는 값을 출력하는 용도로 사용할 수 있다 */}
            <input type="checkbox" 
            checked={isOnlyStock} 
            readOnly 
            onClick={toggleStock}
            />
            <label htmlFor="" 
            onClick={toggleStock}
            >
                Only show products on stock
            </label>
        </div>
        )
    }
}

export default SearchBar