import {colors} from "@/config/colors";
import Image from "next/image";
import folderStyles from '@/styles/Folder.module.css'
export default function Folder({icon,header,subHeader}){


    return(
        <div style={styles.container} onClick={()=>{}} className={folderStyles.container}>
            <div style={styles.iconContainer}>
                <Image src={icon} alt={'Image'} style={styles.icon}/>
            </div>
            <div style={styles.description}>
                <div style={styles.header}>{header}</div>
                <div style={styles.subHeader}>{subHeader}</div>
            </div>

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
    }
}