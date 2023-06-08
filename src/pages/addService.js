import {Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField} from "@mui/material";
import {useState} from "react";
import {colors} from "@/config/colors";
import Header from "@/assets/Header";
import SubHeader from "@/assets/SubHeader";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from '@mui/icons-material/Add';
import {useRouter} from "next/router";
export default function addService() {
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
        router.push('/services')
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
                <div>
                    <div style={styles.header}>Add Service</div>
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
                <div>
                    <div style={styles.header}>Username</div>
                    <TextField id="standard-basic" label="" variant="standard" value={username} onChange={handleChangeUsername}/>
                </div>
                <div>
                    <div style={styles.header}>Password</div>
                    <TextField id="standard-basic" label="" type="password" variant="standard" />
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