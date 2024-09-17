function Mycomponent(){
    let name = 'palak'
    const showmessage = ()=> {
        return 'i am palak'
    }
    return <h2>My name is {name} {showmessage()}  </h2> //calling function and using variable
}

export default Mycomponent