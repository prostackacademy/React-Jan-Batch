function CompB(props) {

    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h1>
            Hero Name:{props.h_Name}
        </h1>
    </div>
}
export default CompB