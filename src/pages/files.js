import Header from "@/assets/Header";
import File from "@/assets/File";
import {Button, Grid} from "@mui/material";
import {colors} from "@/config/colors";
import {useRouter} from "next/router";
import {fileData} from "@/config/dummyData";


export default function Files(){

    const router = useRouter()

    return(
        <div>
            <Header withSettings={false}/>
            <Grid container spacing={2} style={styles.container}>
                {fileData.map((item,index) => (
                    <Grid item xs={0} sm={3} style={styles.childStyle} key={index}>
                        <File  size={item.size} file={item.file} name={item.name}/>
                    </Grid>
                ))}
            </Grid>
            <Button variant={'contained'} style={styles.button} onClick={()=>router.push('/main')}>Back</Button>
        </div>
    )
}


const styles = {
    container :{
        padding:'1vw',
        flexGrow:1
    },
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.main,
        position:'absolute',
        left:'50%',
        bottom:'5%'
    },
    childStyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom: 12
    }
}