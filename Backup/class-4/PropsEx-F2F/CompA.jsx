import CompB from './CompB'
function CompA() {
    let hero_Name = "Rajni"
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB Prop1={"GM"} Prop2={"GN"} h_Name={hero_Name} />
    </div>

}

export default CompA