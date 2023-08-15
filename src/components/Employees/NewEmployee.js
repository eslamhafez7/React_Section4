import React from 'react'
import { useState } from 'react';

const NewEmployee = (props) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('Developer');


    const handleName = (event) => {
        setName(event.target.value)
    } 
    const handleJob = (event) => {
        setJob(event.target.value)
    } 


    const addNewEmployee = (e) => {
        e.preventDefault()
        if(!name) {
            alert('add name')
        }
        const employee = {
            id: new Date().getTime(),
            name,
            job,
            active: true
        }
        props.addNewEmployee(employee)
        setName('')
        setJob('Developer')
    }

    return (
        <div className='new_employee'>
            <h2>Add new employee</h2>
            {name}
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input value={name} id='name' type='text' placeholder='New Employee'
                        onChange={handleName}/>
                </div>
                <div>
                    <label htmlFor='job'>Job</label>
                        <select value={job} id='job' onChange={handleJob}>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                        </select>
                </div>
                <div>
                    <button className='btn' type='submit' onClick={addNewEmployee}>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewEmployee