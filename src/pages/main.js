import Header from "@/assets/Header";
import Folder from "@/assets/Folder";
import {Breadcrumbs, Fab, Typography} from "@mui/material";
import {colors} from "@/config/colors";
import PlusIcon from '@/assets/svgs/Plus.svg'
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/router";
import AddModal from "@/assets/AddModal";
import {folderData} from "@/config/dummyData";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

export default function main(){

    const router = useRouter()
    const [folder,setFolder] = useState(folderData)
    const [open,setOpen] = useState(false);
    const handleCloseModal = () => setOpen(false);
    const handleOpenModal = () => setOpen(true);
    const handleCLick = () =>{
        router.push('/files')
    }

    const addFolder = (name,icon) =>{
        setFolder((folder)=>{
            return [...folder,{
                name:name,
                icon:icon
            }]
        })
    }

    return(
        <div style={styles.container}>
            <Header withSettings={true}/>
            <AddModal open={open} onClose={handleCloseModal} onSave={addFolder}/>
            <div style={styles.list}>
                {
                    folder.map((folder,index)=>
                        <Folder key={index} header={folder.name} subHeader={'synchronized: 15:32 '} icon={folder.icon} onClick={handleCLick}/>)
                }
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
        height: '4vw',
        width: '4vw',
        position:'absolute',
        left:'90%',
        bottom:'5%',
        backgroundColor:'transparent'
    },
    addIcon:{
        width:'100%',
        height:'100%',
        color:colors.main
    }


}