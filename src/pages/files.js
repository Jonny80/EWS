import Header from "@/assets/Header";
import File from "@/assets/File";
import { Grid} from "@mui/material";
import {colors} from "@/config/colors";
import {useRouter} from "next/router";
import {fileData} from "@/config/dummyData";
import {useState} from "react";
import SubHeader from "@/assets/SubHeader";
import FolderIcon from '@mui/icons-material/Folder';


export default function Files({name}){

    const [listview,setListView] = useState(true)

    const router = useRouter()

    function changeView() {
        setListView(!listview)
    }

    return(
        <div>
            <Header withSettings={false}/>
                <SubHeader path={[
                    {
                        label:name,
                        icon:<FolderIcon fontSize={'small'}/>,
                        href:'/files'
                    },
                ]} onChange={changeView}/>
            <Grid container spacing={2} style={styles.container}>
                {fileData.map((item,index) => (
                    <Grid item sm={listview ? 12:3} style={listview ? styles.childStyleList:styles.childStyle} key={index}>
                        <File  size={item.size} file={item.file} name={item.name} synced={'Sync: 20:44'} listView={listview}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}


const styles = {
    container :{
        padding:'1vw',
        flexGrow:1,
    },
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.main,
        position:'absolute',
        left:'50%',
        bottom:'5%'
    },
    childStyle:{
        justifyContent:"center",
        alignItems:'center',
        display:'flex',
        paddingBottom: 12
    },
    childStyleList:{
        justifyContent:"center",
        alignItems:'center',
        display:'flex',
        paddingBottom: 12
    }
}