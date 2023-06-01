import Header from "@/assets/Header";
import File from "@/assets/File";
import {Breadcrumbs, Button, Grid, Typography} from "@mui/material";
import {colors} from "@/config/colors";
import {useRouter} from "next/router";
import {fileData} from "@/config/dummyData";
import Link from "next/link";
export default function Files(){

    const router = useRouter()

    return(
        <div>
            <Header withSettings={false}/>
                <Breadcrumbs aria-label="breadcrumb" style={{marginLeft:'1vw',marginTop:'1vw'}}>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.neutral"
                        variant={'h5'}
                    >
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/main"
                    >
                        Home
                    </Link>
                    </Typography>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        variant={'h5'}
                        color="text.neutral"
                    >
                        Files
                    </Typography>
                </Breadcrumbs>
            <Grid container spacing={2} style={styles.container}>
                {fileData.map((item,index) => (
                    <Grid item xs={0} sm={3} style={styles.childStyle} key={index}>
                        <File  size={item.size} file={item.file} name={item.name} synced={'Sync: 20:44'}/>
                    </Grid>
                ))}
            </Grid>
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