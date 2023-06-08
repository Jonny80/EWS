import FolderIcon from '@/assets/svgs/Folder.svg'
import FileIcon from '@/assets/svgs/File.svg'
import {colors} from "@/config/colors";
import Image from "next/image";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Box, Divider, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import {ContentCut} from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function File({file,name,subHeader,size,synced,listView=false,service=null}){

    const [anchorEl, setAnchorEl] = useState(null);
    const [open ,setOpen] = useState(false);
    const handleClick = (event) => {
        if (open) return
        setOpen(true)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        console.log(open)
        setOpen(false)
        setAnchorEl(null);
    };

    function getIcon(){
        if (file===true) return FileIcon
        return FolderIcon
    }


    if (listView){
        return (
            <div style={styles.listContainer} onClick={handleClick}>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <EditIcon />
                        Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <DeleteIcon color={'error'}/>
                        Delete
                    </MenuItem>
                </Menu>
                <div style={styles.listIcon}>
                    <Image src={getIcon()} alt={'icon'} style={{height: '4vw',
                        width: '4vw',}}/>
                    <div style={styles.listName}>{name}</div>
                </div>
                <div style={styles.listInfo}>
                    <div style={styles.subHeader}>{subHeader}</div>
                    <div style={styles.subHeader}>{'Size: ' + size}</div>
                    <div style={styles.syncedHeader}>
                        <div style={styles.subHeader}>{synced}</div>
                        <TaskAltIcon color={'success'} style={{marginLeft:'.5vw'}} sx={{height:'1vw'}}/>
                    </div>
                </div>
            </div>
        )


    }

    return(
        <div style={styles.container} onClick={handleClick}>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <EditIcon />
                    Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <DeleteIcon color={'error'}/>
                    Delete
                </MenuItem>
            </Menu>
            <Image src={getIcon()} alt={'icon'} style={styles.icon}/>
            <div style={styles.name}>{name}</div>
            <div style={styles.subHeader}>{subHeader}</div>
            <div style={styles.subHeader}>{size}</div>
            <div style={styles.syncedHeader}>
                <div style={styles.subHeader}>{synced}</div>
                <TaskAltIcon color={'success'} style={{marginLeft:'.5vw'}} fontSize={'small'}/>
            </div>
        </div>
    )

}

const styles = {
    listInfo:{
      display:'flex',
      flexDirection:'column',
        justifyContent:'space-between'
    },
    listName:{
        color:colors.main,
        fontSize:'3vw',
        fontFamily:'Lato',
        fontWeight: 'normal',
        marginLeft:'.3vw'
    },
    listContainer:{
        justifyContent: 'space-between',
        height:'5vh',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        border:'2px solid transparent',
        boxShadow:colors.shadow,
        borderRadius:'15px',
        padding:'2vw',
    },
    listIcon:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center'
    },
    container:{
        height:'8vw',
        width:'8vw',
        border:'2px solid transparent',
        boxShadow:colors.shadow,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        borderRadius:'15px',
        padding:'2vw',
        alignItems:'center'
    },
    icon:{
        height: '6vw',
        width: '6vw',
    },
    name:{
        marginTop:'.3vw',
        color:colors.main,
        fontSize:'1.2vw',
        fontFamily:'Lato',
        fontWeight:'bold'
    },
    subHeader:{
        marginTop:'.1vw',
        color:colors.grey,
        fontSize:'.9vw',

    },
    syncedHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },

}