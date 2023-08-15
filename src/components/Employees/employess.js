import { useState } from "react";
import Employee from "./employee";
import NewEmployee from "./NewEmployee";

const initialData = [
    {id: 1, name: 'Sara Ahmed', job: 'Developer', active: true},
    {id: 2, name: 'Eslam Ahmed', job: 'Designer', active: false},
    {id: 3, name: 'Khaled Mostafa', job: 'Developer', active: true},
    {id: 4, name: 'Mai Ahmed', job: 'Designer', active: false}
];
const Employess = () => {
    const [data, setData] = useState(initialData)

    const editName = () => {
        const newName = prompt('Enter a new name:');
        if (newName) {
            setData((prevState) => {
                const newData = [...prevState];
                newData[0].name = newName;
                return newData;
            });
        }
    }
    const handleNewEmployee = (newEmp) => {
        setData((prevState) => {
            const newData = [newEmp, ...prevState]
            return newData
        })
    } 
    return (
        <div className="employess">
            <NewEmployee addNewEmployee= {handleNewEmployee}/>
            <button className="btn" onClick={editName} style={{"cursor": 'pointer'}}>Edit</button>
            <div className="employess_list card">
            <Employee  data={data[0]} />
            <Employee  data={data[1]} />
            <Employee  data={data[2]} />
            <Employee  data={data[3]} />

    </div>
        </div>
    )
};
export default Employess;