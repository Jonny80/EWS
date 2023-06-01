import FolderIcon from '@/assets/svgs/Folder.svg'
import FileIcon from '@/assets/svgs/File.svg'
import {colors} from "@/config/colors";
import Image from "next/image";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function File({file,name,subHeader,size,synced}){

    function getIcon(){
        if (file===true) return FileIcon
        return FolderIcon
    }



    return(
        <div style={styles.container}>
            <Image src={getIcon()} alt={'icon'} style={styles.icon}/>
            <div style={styles.name}>{name}</div>
            <div style={styles.subHeader}>{subHeader}</div>
            <div style={styles.subHeader}>{size}</div>
            <div style={styles.syncedHeader}>
                <div style={styles.subHeader}>{synced}</div>
                <TaskAltIcon color={'success'} style={{marginLeft:'.5vw'}} fontSize={'small'}/>
            </div>
        </div>


    )

}

const styles = {
    container:{
        height:'8vw',
        width:'8vw',
        border:'2px solid transparent',
        boxShadow:colors.shadow,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        borderRadius:'15px',
        padding:'2vw',
        alignItems:'center'
    },
    icon:{
        height: '6vw',
        width: '6vw',
    },
    name:{
        marginTop:'.3vw',
        color:colors.main,
        fontSize:'1.2vw',
        fontFamily:'Lato',
        fontWeight:'bold'
    },
    subHeader:{
        marginTop:'.1vw',
        color:colors.grey,
        fontSize:'.9vw',

    },
    syncedHeader:{
        display:'flex',
        flexDirection:'row',
    },

}