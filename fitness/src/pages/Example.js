import React, {useState, useEffect} from 'react'

const Example = () => {
const [n,setN] = useState(1)
  const [matrix, setMatrix] = useState(Array.from({length: n},()=> Array.from({length: n}, () => null)));
  useEffect(() => {
		
	//document.getElementById('myspan').innerHTML = "bar";// = `La cuenta es ${count}`
	var addbtn = document.getElementById("add");
	addbtn.onclick = function() { //alert ("hi"); 
		setN(n+1)
		setMatrix(Array.from({length: n},()=> Array.from({length: n}, () => null)))
	};
})


  const handleChange = (row, column, event) => {
    let copy = [...matrix];
    copy[row][column] = +event.target.value;
    setMatrix(copy);

    console.log(matrix);
  };

  return (
    <div className="sheet">
		<button id='add'> add</button>
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="number"
                    onChange={e => handleChange(rowIndex, columnIndex, e)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Example