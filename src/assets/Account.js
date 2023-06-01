import {colors} from "@/config/colors";
import Image from "next/image";
import folderStyles from '@/styles/Account.module.css'
import {Button} from "@mui/material";
import OneDrive from '@/assets/svgs/Cloud.svg'
import Apple from '@/assets/svgs/Apple.svg'
import Drive from '@/assets/svgs/GoogleDrive.svg'
export default function Account({icon,header,subHeader,index,onDelete}){

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
        <div style={styles.container} onClick={()=>{}} className={folderStyles.container}>
            <div style={styles.iconContainer}>
                <Image src={getIcon()} alt={'Image'} style={styles.icon}/>
            </div>
            <div style={styles.description}>
                <div style={styles.header}>{header}</div>
                <div style={styles.subHeader}>{subHeader}</div>
            </div>
            <Button variant={'contained'} style={styles.button} onClick={()=> onDelete(index)}>Delete</Button>
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
        height:'15vh',
        borderRadius:'15px',
        border:'2px solid transparent',
        boxShadow:colors.shadow,
        paddingLeft:'2%'
    },
    iconContainer:{
        height:'60%',
        minWidth:'8%'
    },
    icon:{
        width: '100%',
        height:'100%'
    },
    description:{
        display:'flex',
        flexDirection: 'column',
        marginLeft:'5%',
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
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.red,
        position:'absolute',
        right:'3vw'
    },
}