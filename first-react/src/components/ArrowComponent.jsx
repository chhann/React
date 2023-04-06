const ArrowComponent = (props) => {
    const{text,children} = props;
    return(
        <div>
            <h3>함수형 컴포넌트입네다.</h3>
            <p>하나의 부모태그로 전달</p>
            <p>text속성으로 가져온 props값: {props.text}, {text}</p>
            <p>{props.children}, {children}</p>
        </div>
    )
}

export default ArrowComponent;