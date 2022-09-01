import { useState, useEffect, useContext, useMemo, useCallback, useReducer, useRef } from 'react'
import Home from './Home';
import Contact from './Contact';
import NavBar from './NavBar'
import Footer from './Footer'

import './App.css';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0)
  const [dummy, setDummy] = useState(false)//data types 

  const [cardData, setCardData] = useState([
    {
      title: 'hello this is title one'
    },
    {
      title: 'hello this is title two'
    }
  ])

  const [userName, setuserName] = useState(' ')

  const [slectedIndex, setslectedIndex] = useState(null)



  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const incressCount = () => {
    setCount(pre => pre + 1)
  }

  const decressCount = () => {
    setCount(pre => pre - 1)
  }


  const updateDumy = () => {
    setDummy(!dummy)
  }

  // useEffect(() => {
  //   console.log('inside use effect');
  // }, []);

  // console.log('out side use effect');

  const onFormSubmit = () => {
    let data = cardData;

    data.push(
      {
        title: userName
      }
    )
    setCardData(data)
    setDummy(!dummy)
    setuserName('')
  }



  const removeCardEle = (index) => {
    let data = cardData;
    data.splice(index, 1)
    setCardData(data);
    setDummy(!dummy)
  }

  const onUpdateData = (index, value) => {
    console.log(index, value);
    setslectedIndex(index)
    setuserName(value)
    setDummy(!dummy)

  }

  const onFormUpdate = () => {
    let data = cardData;
    data.splice(slectedIndex, 1,{title:userName})
    setCardData(data);
    setslectedIndex(null);
    setuserName('')
    setDummy(!dummy)
  }


  return (
    <div className="App">
      <NavBar />

      <div className='main_sec'>

        <form>
          <input type='text' placeholder='user name' value={userName} onChange={e => setuserName(e.target.value)} />
        </form>
        {
          slectedIndex !==null ? <button onClick={onFormUpdate}>update</button> :

            <button onClick={onFormSubmit}>Submit</button>
        }


        {
          cardData.map((val, i) => (
            <Card
              data={val}
              index={i}
              remove={removeCardEle}
              update={onUpdateData}
            />

          ))
        }

      </div>





      <Footer />

    </div>
  );
}

export default App;


//  component creation
//useState
//props=> componet communication
//useEffect



// react function --- 
// 1)useState
// 2)useEffect
// 3)useContext
// 4)useMemo
// 5)useCallback
// 6)useReducer
// 7)useRef

//class componets --> 