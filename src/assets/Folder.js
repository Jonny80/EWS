import {colors} from "@/config/colors";
import Image from "next/image";
import folderStyles from '@/styles/Folder.module.css'
import OneDrive from "@/assets/svgs/Cloud.svg";
import Apple from "@/assets/svgs/Apple.svg";
import Drive from "@/assets/svgs/GoogleDrive.svg";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {Button} from "@mui/material";
export default function Folder({icon,header,subHeader,onClick}){


    function getIcon(){
        switch (icon){
            case 'microsoft':
                return OneDrive
            case 'apple':
                return Apple
            case 'google':
                return Drive
            default:
                return OneDrive
        }
    }
    return(
        <div style={styles.container} onClick={onClick} className={folderStyles.container}>

            <div style={styles.description}>
                <div style={styles.iconContainer}>
                    <div style={styles.header}>{header}</div>

                </div>
                <div style={styles.subHeaderContainer}>
                    <Image src={getIcon()} alt={'Image'} style={styles.icon}/>
                    <div style={styles.subHeader}>{subHeader}</div>
                    <TaskAltIcon color={'success'} style={{marginLeft:'.5vw'}} fontSize={'small'}/>

                </div>
            </div>
            <Button variant={'contained'} style={styles.button} onClick={()=> {}}>Delete</Button>

        </div>

    )

}

const styles = {
    container:{
        marginTop:'1%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        height:'8vw',
        borderRadius:'15px',
        border:'2px solid transparent',
        boxShadow:colors.shadow,
        paddingLeft:'2%'
    },
    iconContainer:{
        justifyContent: 'space-between',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
    },
    icon:{
        width: '7%',
        height:'7%',
        marginRight: '5%'
    },
    description:{
        display:'flex',
        flexDirection: 'column',
        marginLeft:'2%',
        alignItems: 'space-between'
    },
    header:{
        color:colors.main,
        fontSize:'2rem',
        fontFamily:'Lato',
        fontWeight:'bold'
    },
    subHeader:{
        color:colors.grey,
    },
    subHeaderContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.red,
        position:'absolute',
        right:'3vw'
    },
}