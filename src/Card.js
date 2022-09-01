import React from 'react'

const Card = ({ data, index, remove, update }) => {
    return (
        <div className='card_container'>
            <p>{data?.title}</p>
            <div className='card_action'>
                <button onClick={() => update(index, data.title)}>E</button>
                <button onClick={() => remove(index)}>X</button>
            </div>
        </div>
    )
}

export default Card