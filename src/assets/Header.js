import {colors} from "@/config/colors";
import Image from "next/image";
import logo from '@/assets/svgs/LogoWithText.svg'
import {IconButton} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import {useRouter} from "next/router";
export default function Header({withSettings}){

    const router = useRouter()

    return(
        <div style={styles.container}>
            <IconButton style={styles.logo} onClick={()=>router.push('/main')}
            >
                <Image src={logo} alt={'Logo'} style={styles.icon} />
            </IconButton>
            {
                withSettings &&
                <IconButton color="white" aria-label="settings"
                            component="label"
                            style={styles.settingButton}
                            onClick={()=>router.push('/services')}
                >
                    <SettingsIcon style={styles.settingsIcon}/>
                </IconButton>
            }

        </div>
    )
}


const styles = {
    container:{
        boxShadow:colors.shadow,
        backgroundColor:colors.main,
        height:'4vw',
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
        display:'flex',
        alignItems: 'flex-end',
        width:'5vw',
        height:'100%',
    },
    settingsIcon:{
        color:colors.white,
        width:'100%',
        height:'100%'
    }
}