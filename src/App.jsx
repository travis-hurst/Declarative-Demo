import React, { useState } from 'react';
import './App.css'
import ArrayListSort from './components/ArrayListSort.jsx'
import Imperative from './assets/Imperative-Example.jpg'
import MoreDeclarative from './assets/MoreDeclarative.jpg'

function App() {

  const [imageClicked, setImageClicked] = useState({
    showImp: false,
    showDec: false,
    mostDec: false
  });

  const onClickHandler = (order) => {
    setImageClicked((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
  };

    // Here an array list is built and specified with specific values
    const[impArray, setSelectedArray] = useState([3, 54, 10, 41, 46, 19, 2, 89, 97, 70, 8, 39, 51, 76, 29, 74]);

    // Sort the array in ascending order (more imperative)
    const sortArray = () => {
      try {
        // Create a copy of the array to avoid mutation
        const copyArray = [...impArray];

        // Do a basic buble sort through the array elements
        for (let i = 0; i < copyArray.length; i++) {
          for (let j = i + 1; j < copyArray.length; j++) {
            if (copyArray[i] > copyArray[j]) {
              // Swap elements
              [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
            }
          }
        }
    
        // Update state with the sorted array (will now re-render the sorted array)
        setSelectedArray(copyArray);
      } catch (error) {
        console.error("Error sorting array:", error);
      }
    };

    // Here an array list is randomly generated N = 16 length array 0 <= A[N] <= 100
    const decNumbers = Array.from({ length: 16 }, () => Math.floor(Math.random() * 101));
    // decArray is now set to the value of decNumbers in state setDecArray
    const [decArray, setDecArray] = useState(decNumbers);
    
    // Sort the array in ascending order (more declaritive)
    const sortArrayDec = () => {
      // Create a copy of the array to avoid mutation
      const copyArrayDec = [...decArray];
  
      // Use the sort method to sort the array
      copyArrayDec.sort((a, b) => a - b); // a - b for ascending order
  
      // Update state with the sorted array (will now re-render the sorted array)
      setDecArray(copyArrayDec);
    };


  return (
    <>
      <div className="App">
        <h1>Declarative Demo</h1>
        <p>
          All of these top buttons do an array list sort, feel free to give them a try! <br></br>
          Can you tell how they are different? When you are ready, click each ones code see for yourself.
        </p>
        <div className="interactable-container">
          <div className="demo-col">
            {/* Here the button will call the sortArray when clicked */}
            <button className="btn big-btn btn-primary" onClick={sortArray}>
              Sort Array List
            </button>
            {/* Here the map data structure takes our array and breaks it into key/value pairs */}
            {/* It then will refresh the array once setSelectedArray is called at the end of sort */}
            <ul>
              {impArray.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
            <button className="btn big-btn btn-primary" onClick={() => onClickHandler("showImp")}>
              Show Code
            </button>
          </div>
          <div className="demo-col">
             {/* Here the button will call the sortArrayDev when clicked */}
             <button className="btn big-btn btn-primary" onClick={sortArrayDec}>
               Sort Array List
             </button>
             {/* Here the map data structure takes our array and breaks it into key/value pairs */}
             {/* It then will refresh the array once setDecArray is called at the end of sort */}
             <ul>
               {decArray.map((number, index) => (
                 <li key={index}>{number}</li>
               ))}
             </ul>
             <button className="btn big-btn btn-primary" onClick={() => onClickHandler("showDec")}>
               Show Code
             </button>
          </div>
          <ArrayListSort></ArrayListSort>   
        </div>
        <div className="image">
         {imageClicked.showImp && <img src={Imperative} alt="showImp"/>}
         {imageClicked.showDec && <img src={MoreDeclarative} alt="showDec"/>}
         {imageClicked.mostDec && <img src={Declarative} alt="mostDec"/>}
        </div>
      </div>
    </>
  )
}

export default App
