import Header from "@/assets/Header";
import Folder from "@/assets/Folder";
import {Fab} from "@mui/material";
import {colors} from "@/config/colors";
import PlusIcon from '@/assets/svgs/Plus.svg'
import Image from "next/image";
import Apple from '@/assets/svgs/Apple.svg'
import Drive from '@/assets/svgs/GoogleDrive.svg'
import Cloud from '@/assets/svgs/Cloud.svg'

export default function main(){

    return(
        <div style={styles.container}>
            <Header />
            <div style={styles.list}>
                <Folder header={"Bilder"} subHeader={'synchronized: 15:32 '} icon={Apple}/>
                <Folder header={"Dokumente"} subHeader={'synchronized: 15:32 '} icon={Drive}/>
                <Folder header={"Uni"} subHeader={'synchronized: 15:32 '} icon={Cloud}/>


            </div>
            <Fab color="primary" aria-label="add" style={styles.Fab}>
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