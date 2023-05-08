import {
    Box,
    Button, Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Modal,
    Select,
} from "@mui/material";
import {colors} from "@/config/colors";
import {useState} from "react";

export default function AddModal({open,onClose}){

    const [service, setService] = useState('');
    const [folder, setFolder] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChangeService = (event) => {
        setService(event.target.value);
    };
    const handleChangeFolder = (event) => {
        setFolder(event.target.value);
    };
    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked)
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
                                    onChange={handleChangeService}
                                >
                                    <MenuItem value={1}>Drive</MenuItem>
                                    <MenuItem value={2}>Apple Cloud</MenuItem>
                                    <MenuItem value={3}>OneDrive</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div>
                    <div style={styles.header}>Add Service</div>
                    <div>
                        <Box sx={{ minWidth: 120 }} style={{marginTop:'2vw'}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                                <Select
                                    labelId="demo"
                                    id="Demo"
                                    value={folder}
                                    label="Service"
                                    onChange={handleChangeFolder}
                                >
                                    <MenuItem value={1}>Bilder</MenuItem>
                                    <MenuItem value={2}>Dokumente</MenuItem>
                                    <MenuItem value={3}>Uni</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div>
                    <FormControlLabel
                        value="Subfolder"
                        control={<Checkbox checked={checked} onChange={handleChangeCheckbox}/>}
                        label="Subfolder"
                        labelPlacement="start"
                    />
                </div>
                <div style={styles.buttonContainer}>
                    <Button variant={'contained'} style={styles.button} onClick={onClose}>Back</Button>
                    <Button variant={'contained'} style={styles.button} onClick={onClose}>Save</Button>

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


    }
}