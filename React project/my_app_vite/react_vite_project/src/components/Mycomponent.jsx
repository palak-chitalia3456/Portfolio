function Mycomponent(props){
    //to set default value as props we have to declare globally in function as function Mycomponent(name='steve',cars) 
    //and we just have to remove name prop in mycomponent tag in app.jsx file
    /* without useing props
    let name = 'palak'
    const showmessage = ()=> {
        return 'i am palak'
    }
    return <h2>My name is {name} {showmessage()}  </h2> //calling function and using variable*/

    //now using props printing data,function etc

    return <h2>My Name is {props.name} i have {props.cars}</h2>
    //setting up name prop for mycomponent
    // we can also put only props name in component function as name so everytime we don't have to write "props." before property name
}

export default Mycomponent