import React, { useState } from 'react';
import Declarative from '../assets/Declarative-Example.jpg'

function ArrayListSort() {

    const [imageClicked, setImageClicked] = useState({
        mostDec: false
      });
    
      const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
          ...prevState,
          [order]: !prevState[order]
        }));
      };

    // Here an array list is randomly generated N = 16 length array 0 <= A[N] <= 100
    const decNumbersComp = Array.from({ length: 16 }, () => Math.floor(Math.random() * 101));
    // decArray is now set to the value of decNumbersComp in state setDecArrayComp
    const [decArrayComp, setDecArrayComp] = useState(decNumbersComp);
    
    // Sort the array in ascending order (most declaritive)
    const sortArrayDecComp = () => {
    // Create a copy of the array to avoid mutation
    const copyArrayDecComp = [...decArrayComp];

    // Use the sort method to sort the array
    copyArrayDecComp.sort((a, b) => a - b); // a - b for ascending order

    // Update state with the sorted array (will now re-render the sorted array)
    setDecArrayComp(copyArrayDecComp);
    };

  return (
    <>
     <div className="demo-col">
        <div>
            {/* Here the button will call the sortArrayDecComp when clicked */}
            <button style={{width:'100%'}} className="btn big-btn btn-primary" onClick={sortArrayDecComp}>
            Sort Array List
            </button>
            {/* Here the map data structure takes our array and breaks it into key/value pairs */}
            {/* It then will refresh the array once setDecArrayComp is called at the end of sort */}
            <ul>
            {decArrayComp.map((number, index) => (
                <li key={index}>{number}</li>
            ))}
            </ul>
            <button style={{width:'100%'}} className="btn big-btn btn-primary" onClick={() => onClickHandler("mostDec")}>
            Show Code
            </button>
        </div>
        <div className="image">
            {imageClicked.mostDec && <img src={Declarative} style={{maxWidth:'850px'}}alt="mostDec"/>}
         </div>
     </div>
    </>

  );
}

export default ArrayListSort











