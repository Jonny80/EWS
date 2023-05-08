import Header from "@/assets/Header";
import Folder from "@/assets/Folder";
import {Fab} from "@mui/material";
import {colors} from "@/config/colors";
import PlusIcon from '@/assets/svgs/Plus.svg'
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/router";
import AddModal from "@/assets/AddModal";

export default function main(){

    const router = useRouter()
    const [open,setOpen] = useState(false);
    const handleCloseModal = () => setOpen(false);
    const handleOpenModal = () => setOpen(true);
    const handleCLick = () =>{
        router.push('/files')
    }

    return(
        <div style={styles.container}>
            <Header withSettings={true}/>
            <AddModal open={open} onClose={handleCloseModal}/>
            <div style={styles.list}>
                <Folder header={"Bilder"} subHeader={'synchronized: 15:32 '} icon={'apple'} onClick={handleCLick}/>
                <Folder header={"Dokumente"} subHeader={'synchronized: 15:32 '} icon={'google'} onClick={handleCLick}/>
                <Folder header={"Uni"} subHeader={'synchronized: 15:32 '} icon={'microsoft'} onClick={handleCLick}/>
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