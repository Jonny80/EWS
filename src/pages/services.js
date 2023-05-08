import Header from "@/assets/Header";
import Account from "@/assets/Account";
import SettingModal from "@/assets/SettingModal";
import {useState} from "react";
import Image from "next/image";
import PlusIcon from "@/assets/svgs/Plus.svg";
import {Fab} from "@mui/material";
import {colors} from "@/config/colors";


export default function services(){

    const [open,setOpen] = useState(false);
    const handleCloseModal = () => setOpen(false);
    const handleOpenModal = () => setOpen(true);


    return (
        <div style={styles.container}>
            <Header withSettings={false}/>
            <SettingModal open={open} onClose={handleCloseModal}/>
            <div style={styles.list}>
                <Account header={'John Smith'} subHeader={'sync: 14:22'} icon={'apple'}/>
                <Account header={'John Smith'} subHeader={'sync: 14:22'} icon={'microsoft'}/>
                <Account header={'John Smith'} subHeader={'sync: 14:22'} icon={'google'}/>
            </div>
            <Fab color="primary" aria-label="add" style={styles.Fab} onClick={handleOpenModal}>
                <Image src={PlusIcon} alt={"Plus"} style={styles.addIcon}/>
            </Fab>
        </div>
    )
}



const styles = {
    container:{
        height:'100vh',
        width:'100%',
        display:'flex',
        flexDirection:'column',
    },
    list:{
        flexGrow:1,
        padding:'1%'

    },
    Fab:{
        boxShadow:'none',
        height: '5vw',
        width: '5vw',
        position:'absolute',
        left:'50%',
        bottom:'5%',
        backgroundColor:'transparent'
    },
    addIcon:{
        width:'100%',
        height:'100%',
        color:colors.main
    }
}