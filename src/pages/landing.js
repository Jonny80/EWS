import {colors} from "@/config/colors";
import {Button} from "@mui/material";

export default function Landing(){

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.header}>
                    Wollen Sie diese App als PWA installieren?

                </div>

                <div style={styles.buttons}>
                    <Button variant={'outlined'} style={{borderRadius:'0.3rem',backgroundColor:colors.white}}>Ja</Button>
                    <Button variant={'outlined'} style={{borderRadius:'0.3rem',backgroundColor:colors.white}}>Nein</Button>
                </div>

            </div>
        </div>
    )
}

const styles = {
    container:{
        display:'flex',
        height:'100vh',
        width:'100vw',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.main
    },
    card:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-around',
        width:"35%",
        height:'50%',
    },
    header:{
        textAlign:'center',
        color:'white',
        fontFamily:'sans-serif',
        fontSize:'2rem'
    },
    buttons:{
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        width:'50%',
        justifyContent: 'space-between'
    }
}