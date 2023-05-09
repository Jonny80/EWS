import {Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField} from "@mui/material";
import {colors} from "@/config/colors";
import {useState} from "react";

export default function SettingModal({open,onClose,addService}){

    const [service, setService] = useState('');
    const [username,setUsername] = useState('')

    const handleChange = (event) => {
        setService(event.target.value);
    };
     const handleChangeUsername = (e) =>{
         setUsername(e.target.value)
     }

     const handleSave = () =>{
         if (username.length > 0 && service.length > 0){
             addService(username,service);
         }
         onClose();
     }

    return(
        <Modal open={open} onClose={onClose} style={styles.modal}>
            <div style={styles.container}>
                <div>
                    <div style={styles.header}>Add Service</div>
                    <div>
                        <Box sx={{ minWidth: 120 }} style={{marginTop:'2vw'}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                                <Select
                                    labelId="demo"
                                    id="Demo"
                                    value={service}
                                    label="Service"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'google'}>Drive</MenuItem>
                                    <MenuItem value={'apple'}>Apple Cloud</MenuItem>
                                    <MenuItem value={'microsoft'}>OneDrive</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div>
                    <div style={styles.header}>Username</div>
                    <TextField id="standard-basic" label="" variant="standard" value={username} onChange={handleChangeUsername}/>
                </div>
                <div>
                    <div style={styles.header}>Password</div>
                    <TextField id="standard-basic" label="" type="password" variant="standard" />
                </div>
                <Button variant={'contained'} style={styles.addButton} onClick={handleSave}>Add Account</Button>
                <div style={styles.buttonContainer}>
                    <Button variant={'contained'} style={styles.button} onClick={onClose}>Back</Button>
                    <Button variant={'contained'} style={styles.button} onClick={handleSave}>Save</Button>
                </div>
            </div>
        </Modal>
    )

}

const styles = {
    modal:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    container:{
        padding:'2vw',
        backgroundColor:colors.white,
        width:'80vw',
        height:'80vh',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent: 'space-between',
        borderRadius:'15px',
        border:'2px solid transparent',
        boxShadow:colors.shadow,
   },
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.main,
    },
    header:{
        fontWeight:'bold',
        fontFamily:'Lato',
        fontSize:'1.5rem',
        textAlign:'center'

    },
    buttonContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'40vw'
    },
    addButton:{
        borderRadius:'0.3rem',
        backgroundColor:colors.main,
        minWidth:'10vw'
    }
}