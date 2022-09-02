import React, { useState } from 'react'

const Forms = () => {


    const [formData, setFormData] = useState({
        userName: 'uday',
        Password: ''
    })


    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData(pre => ({
            ...pre,
            [name]: value
        }))

    }


    const onSubmit=(e)=>{
        e.preventDefault()
        if(formData.userName && formData.Password){
            console.log(formData);
        }else{
            alert('all fields are required')
        }
    }



    return (
        <div style={{ margin: '10px' }}>
            <form className='form_container'>
                <input type='text' placeholder='user name ' name='userName' value={formData.userName} onChange={handleChange} />
                <input type='password' placeholder=' Password' name='Password' value={formData.Password} onChange={handleChange} />
                <button onClick={onSubmit}>Submit</button>

            </form>


        </div>
    )
}

export default Forms