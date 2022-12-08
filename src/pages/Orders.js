import React,{useState} from 'react'
import '../components/styles/Main.css'

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper"

function Orders() {
  // const rows=[]
  const [details,setDetails] = useState({
      name:"",
      parcelType: "",
      destination: "",
      weight: 0,
      pickUpAddress:"",
      presentLocation:"",
      receievedBy:"",
      pickUptime: 0,
      description: "",
  });
  const handleChange =(e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return {...prev, [name]: value}
    })

  };
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(details);
  }
  console.log(details);
  return (
   <div className="container">
    <form className='Form' onSubmit= {handleSubmit}>
      <h3>Name:</h3> <input type="text" name ="name" onChange={handleChange} />
      
      <h3>Description:</h3> <input type="text" name ="Description" onChange={handleChange}/>
      <h3>PickUp Address:</h3>  <textarea onChange={handleChange}></textarea>
      <h3>Present Location:</h3> <input type="text" name= "PickUpLocation" onChange={handleChange}/>
      <h3>ReceievedBy:</h3> <input type="text" name="Received By" onChange={handleChange}/>
      <h3>Weight</h3> <input type="text" name ="Weight" onChange={handleChange}/>
      <h3>PickUp time</h3> <input type="text" name = "PickUp time" onChange={handleChange}/>
      <button type="submit">submit form</button>
    </form>
   </div>
//     <div>
//         <TableContainer component={Paper} className="table">
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>

//                 <TableCell   align="left">Parcel Type</TableCell>
//                 <TableCell   align="left">Description</TableCell>
//                 <TableCell   align="left">Pick-up Address</TableCell>
//                 <TableCell   align="left">Present Location</TableCell>
//                 <TableCell   align="left">Pick-up Time</TableCell>
//                 <TableCell   align="left">Received_at</TableCell>
//                 <TableCell   align="left">Weight</TableCell>
//                 <TableCell   align="left">status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell className="tableCell">{row.id}</TableCell>
//                   <TableCell className="tableCell">
//                   </TableCell>
//                   <TableCell align="left">{row.Parceltype}</TableCell>
//                   <TableCell className="tableCell">{row.Description}</TableCell>
//                   <TableCell className="tableCell">{row.PickUpAddress}</TableCell>
//                   <TableCell className="tableCell">{row.PresentLocation}</TableCell>
//                   <TableCell className="tableCell">{row.PickUpTime}</TableCell>
//                   <TableCell className="tableCell">{row.Received_at}</TableCell>
//                   <TableCell className="tableCell">{row.Weight}</TableCell>
                
//                   <TableCell className="tableCell">
//                     <span className={`status ${row.status}`}>{row.status}</span>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//       </TableContainer>
  
// </div>

   
  )
}

export default Orders