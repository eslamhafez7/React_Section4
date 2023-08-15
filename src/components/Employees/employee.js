// import NewEmployee from "./NewEmployee"

const Employee = (props) => {
    return (
        <div className={`employee employee_primiary`}>
            <h3>{props.data.name}</h3>
            <small className={`${props.data.job === 'Developer' ? "": "employee_secondry"}`}>{props.data.job}</small>
            <i>{props.data.active ? 'Active': 'Inactive'}</i>
        </div>
    )
}

export default Employee