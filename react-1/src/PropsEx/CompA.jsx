import CompB from './CompB'
function CompA() {
    let hero_Name = "Rajni"
    let hero_In = "Nayana"
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB hero={hero_Name} actress={hero_In} />
    </div>

}

export default CompA