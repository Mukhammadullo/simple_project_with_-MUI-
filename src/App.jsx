import { useState } from 'react'
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Dialog from '@mui/material/Dialog';
import { DarkMode } from '@mui/icons-material';
import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './App.css'
import { border } from '@mui/system';

// funсtion top
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {

  // id
  const [id, idx] = useState(null)

  // search
  const [search, setSearch] = useState('')

  //#input States Add
  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [statu, setStatu] = useState("")
  const [citi, setSciti] = useState("")
  const [phon, setPhon] = useState("")

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };


  const [data, setData] = useState([
    {
      "id": 1,
      "img": "src/assets/4.svg",
      "name": "Jacobs Jones",
      "email": "jackson.graham@example.com",
      "city": "Dushanbe",
      "phone": "8888 00 90",
      "complete": false
    },
    {
      "id": 2,
      "img": "src/assets/Avatar.png",
      "name": "Jame Tony",
      "email": "jackson.graham@example.com",
      "city": "Kulob",
      "phone": "8888 00 90",
      "complete": false,
    },
    {
      "id": 3,
      "img": "src/assets/3.svg",
      "name": "Jen Kenzo",
      "email": "jackson.graham@example.com",
      "city": "Bokhtar",
      "phone": "8888 00 90",
      "complete": false

    },
    {
      "id": 4,
      "img": "src/assets/4.svg",
      "name": "Tom Rumi",
      "email": "jackson.graham@example.com",
      "city": "Dushanbe",
      "phone": "8888 00 90",
      "complete": false
    },
    {
      "id": 5,
      "img": "src/assets/5.svg",
      "name": "Sem Jeny",
      "email": "jackson.graham@example.com",
      "city": "Khujand",
      "phone": "8888 00 90",
      "complete": false
    }
  ])


  // textfiled_City
  const currencies = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'Dushanbe',
      label: 'Dushanbe'
    },
    {
      value: 'Kulob',
      label: 'Kulob',
    },
    {
      value: 'Bokhtar',
      label: 'Bokhtar',
    },
    {
      value: 'Khujand',
      label: 'Khujand',
    },
  ];

  // textfiled_status
  const status = [
    {
      value: "true",
      label: 'Active',
    },
    {
      value: "false",
      label: 'Inective',
    }
  ]

  // Function settings_
  const [open1, setOpen1] = React.useState(false);
  const [elemModal, setElemeModal] = useState(null)
  const handleClickOpen1 = (e) => {

    setElemeModal(e)
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };


  // Function Add_colose
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  // add User
  function addUser() {
    let newUser = {
      id: new Date().getMinutes(),
      avatar: avatar,
      name: name,
      email: email,
      status: statu,
      city: citi,
      phone: phon,
      completed: false
    }
    console.log(newUser);
    setAvatar('')
    setName('')
    setEmail('')
    setOpen('')
    setPhon('')
    handleClose(false)
    setData([...data, newUser])

  }


  // Deluser
  function delUser(id) {
    setData(data.filter((element) => {
      return element.id != id
    }))
    setOpen1(false)
  }


  return (
    <>
      {/* header */}
      <header className='flex justify-between items-center m-[2%]'>
        <h1 className='font-bold text-[35px]'>User List</h1>
        <div className='flex'>
          <Button variant="contained" onClick={handleClickOpen} color="primary" sx={{ marginRight: "25px" }}>+ New</Button>

          <div>
            <Button variant="outlined" startIcon={<LightModeIcon />}>Light</Button>
            <Button variant="outlined" startIcon={<NightlightRoundIcon />}>Dark</Button>
          </div>
        </div>
      </header>

      {/* navbar */}
      <div className='flex justify-between m-[2%]'>

        <div>

          {/* textfiled_status*/}
          <TextField sx={{ width: "250px" }} id="outlined-select-currency" select label="Status" defaultValue="USD" >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* textfiled_city */}
          <TextField sx={{ width: "250px", marginLeft: "20px" }} id="outlined-select-currency" select label="City" defaultValue="EUR" >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>


        {/* right */}
        <div>
          <TextField sx={{ width: "300px", }} id="filled-search" label="Search " type="search" variant="filled"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

      </div>



      {/* section_main */}
      <section className='m-[2%] w-[90% h-auto  '>
        {/* top */}
        <div className='flex justify-between items-center w-[100% h-[10vh] bg-[#F8F9FD] text-[black]'>
          <h1 className='text-[#40464C] text-[18px] mr-[100px] font-medium'><PersonIcon></PersonIcon> Name</h1>
          <h1 className='text-[#40464C] text-[18px] ml-[200px] font-medium'><LockIcon></LockIcon> City</h1>
          <h1 className='text-[#40464C] text-[18px] ml-[200px] font-medium'><AccessTimeIcon></AccessTimeIcon> Status</h1>
          <h1 className='text-[#40464C] text-[18px] ml-[200px] font-medium'><LocalOfferIcon ></LocalOfferIcon> Phone</h1>
          <h1>   </h1>
        </div>




        <div>
          {data.filter((element) => {
            return search.toLocaleLowerCase() === '' ? element : element.name.toLocaleLowerCase().includes(search)
          }).map((element) => {

            return (
              <div key={element.id} className='h-[14vh] flex justify-between items-center border-e-blue-700 border-solid border-b-[2px]'>
                {/* name */}
                <div className='flex'>
                  <img className='w-[50px] h-[50px] rounded-[50%] shadow-xl shadow-black' src={element.img} />
                  <div className='m-[5px]'>
                    <h1 className='text-[#40464C] font-medium text-[18px]'>{element.name}</h1>
                    <h1 className='text-[#696C71] font-mono' >{element.email}</h1>
                  </div>
                </div>

                {/* city */}
                <h1 className='text-[#40464C] font-medium text-[18px]'>{element.city}</h1>


                {/* status */}
                <button className='w-[150px] h-[40px] bg-[#748998] text-[white]'>INACTIVE</button>


                {/* phone */}
                <h1 className='text-[#40464C] font-bold'>{element.phone}</h1>


                {/* button */}
                <button onClick={() => handleClickOpen1(element)}
                ><MoreHorizIcon></MoreHorizIcon></button>

              </div>
            )
          })}
        </div>
      </section>



      {/* Dialog Add_ */}
      <Dialog open={open} TransitionComponent={Transition} keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Add New +"}
          <CloseIcon onClick={handleClose}></CloseIcon>
        </DialogTitle>


        {/* input */}
        <DialogContent>
          <TextField value={avatar} onChange={(event) => setAvatar(event.target.value)} sx={{ marginBottom: "25px", marginTop: "10px" }} fullWidth label="Image" id="fullWidth" />
          <TextField value={name} onChange={(event) => setName(event.target.value)} sx={{ marginBottom: "25px" }} fullWidth label="name" id="fullWidth" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} sx={{ marginBottom: "25px" }} fullWidth label="E-mail" id="fullWidth" />
          {/* status */}
          <TextField value={statu} onChange={(event) => setStatu(event.target.value)} sx={{ width: "552px", marginBottom: "25px" }} id="outlined-select-currency" select label="Status" defaultValue="USD" >
            <MenuItem value={false}>
              {"Inactive"}
            </MenuItem>
            <MenuItem value={true}>
              {"Active"}
            </MenuItem>
          </TextField>
          {/* textfiled_city */}
          <TextField value={citi} onChange={(event) => setSciti(event.target.value)} sx={{ width: "552px", marginBottom: "25px" }} id="outlined-select-currency" select label="City" defaultValue="EUR" >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* phone */}
          <TextField value={phon} onChange={(event) => setPhon(event.target.value)} sx={{ marginBottom: "25px" }} fullWidth label="phone" id="fullWidth" />

        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={() => addUser()}>Save</Button>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>



      {/* Settings */}

      <Dialog open={open1} onClose={handleClose1} aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">

        <div className='flex justify-center items-center m-[10px]'>
          <AccountCircleIcon></AccountCircleIcon>
          <Button variant="text">View Profile</Button>
        </div>


        <div className='flex justify-center items-center m-[10px]'>
          <EditIcon></EditIcon>
          <Button variant="text" onClick={() => {
            handleClose1()
            handleClickOpen2()
          }}>Edit</Button>
        </div>

        <div className='flex justify-center items-center m-[10px]'>
          <DeleteIcon></DeleteIcon>
          <Button variant="text" onClick={() => delUser(elemModal.id)}>Delete</Button>
        </div>
        <DialogActions>
          <Button onClick={handleClose1}>Colose</Button>
        </DialogActions>
      </Dialog>


      {/* DialogEdit */}

      
    <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit"}
        </DialogTitle>
        <DialogContent>

          <TextField   sx={{ marginBottom: "25px", marginTop: "10px" }} fullWidth label="Image" id="fullWidth" />
          <TextField   sx={{ marginBottom: "25px", marginTop: "10px" }} fullWidth label="Name" id="fullWidth" />
          <TextField   sx={{ marginBottom: "25px", marginTop: "10px" }} fullWidth label="E-mail" id="fullWidth" />

          {/* status */}
          <TextField value={statu} onChange={(event) => setStatu(event.target.value)} sx={{ width: "552px", marginBottom: "25px" }} id="outlined-select-currency" select label="Status" defaultValue="USD" >
            <MenuItem value={false}>
              {"Inactive"}
            </MenuItem>
            <MenuItem value={true}>
              {"Active"}
            </MenuItem>
          </TextField>

          {/* textfiled_city */}
          <TextField  value={citi} onChange={(event) => setSciti(event.target.value)} sx={{ width: "552px", marginBottom: "25px" }} id="outlined-select-currency" select label="City" defaultValue="EUR" >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField  sx={{ marginBottom: "25px", marginTop: "10px" }} fullWidth label="phone" id="fullWidth" />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleClose2} autoFocus>
           Cancel
          </Button>
        </DialogActions>
      </Dialog>


    </>
  )
}

export default App
