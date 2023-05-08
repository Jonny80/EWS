import {colors} from "@/config/colors";
import Image from "next/image";
import logo from '@/assets/svgs/LogoWithText.svg'
import {IconButton} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
export default function Header(){

    return(
        <div style={styles.container}>
            <IconButton style={styles.logo}>
                <Image src={logo} alt={'Logo'} style={styles.icon} />
            </IconButton>
            <IconButton color="white" aria-label="settings" component="label" style={styles.settingButton}>
                <SettingsIcon style={styles.icon}/>
            </IconButton>
        </div>
    )
}


const styles = {
    container:{
        boxShadow:colors.shadow,
        backgroundColor:colors.main,
        height:'6vw',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    logo:{
        height: '100%',
        width:'20vw',
    },
    icon:{
        color:colors.white,
        width:'100%',
        height:'100%'
    },
    settingButton:{
        padding: 0,
        width:'5vw',
        height:'100%'
    }


}