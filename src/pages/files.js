import Header from "@/assets/Header";
import File from "@/assets/File";
import {Button, Grid} from "@mui/material";
import {colors} from "@/config/colors";
import {useRouter} from "next/router";


const testfile = [1,2,3,4,5,6,7,8,9,0,10];
export default function Files(){

    const router = useRouter()

    return(
        <div>
            <Header withSettings={false}/>
            <Grid container spacing={2} style={styles.container}>
                {testfile.map((item,index) => (
                    <Grid item xs={0} sm={3} style={styles.childStyle} key={index}>
                        <File  size={'5 MB'} file={true} name={'File001'}/>
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