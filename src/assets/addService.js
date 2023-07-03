import {Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField} from "@mui/material";
import {useState} from "react";
import {colors} from "@/config/colors";
import Header from "@/assets/Header";
import SubHeader from "@/assets/SubHeader";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from '@mui/icons-material/Add';
import {useRouter} from "next/router";
export default function AddService({onClose,addService}) {
    const [service, setService] = useState('');
    const [username,setUsername] = useState('')

    const router = useRouter();
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

    return (
        <div style={styles.modal}>
            <Header withSettings={false} />
            <SubHeader path={[{
                href:'/services',
                label:'Service',
                icon: <SettingsIcon fontSize={'small'} />
            },
                {
                    href:null,
                    label:'Add Service',
                    icon: <AddIcon fontSize={'small'} />
                }]} />
            <div style={styles.container}>
                    <h2 style={styles.header}>Add Service</h2>
                        <Box sx={{ minWidth: 120 }} style={{marginTop:'2vw'}}>
                            <div style={{marginBottom:"1vw",fontWeight:'bold',textAlign:"center"}}>Select service</div>
                            <FormControl fullWidth style={{width:"30vw"}}>
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
                <div>
                    <div style={styles.header}>Username</div>
                    <TextField id="standard-basic" label="" variant="standard" value={username} onChange={handleChangeUsername} style={{width:"30vw"}}/>
                </div>
                <div>
                    <div style={styles.header}>Password</div>
                    <TextField id="standard-basic" label="" type="password" variant="standard" style={{width:"30vw"}}/>
                </div>
                <Button variant={'contained'} style={styles.addButton} onClick={handleSave}>Add Account</Button>
            </div>
        </div>
    )
}

const styles = {
    modal:{
        display:'flex',
        flexDirection:'column',
        height:'100vh'
    },
    container:{
        flexGrow : 1,
        padding:'2vw',
        backgroundColor:colors.white,
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.main,
    },
    header:{
        fontWeight:'bold',
        fontFamily:'Lato',
        textAlign:'center'

    },
    header2:{
        fontFamily:'Lato',
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