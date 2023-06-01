import Header from "@/assets/Header";
import Account from "@/assets/Account";
import SettingModal from "@/assets/SettingModal";
import {useState} from "react";
import Image from "next/image";
import PlusIcon from "@/assets/svgs/Plus.svg";
import {Breadcrumbs, Fab, Typography} from "@mui/material";
import {colors} from "@/config/colors";
import {serviceData} from "@/config/dummyData";
import Link from "next/link";

/**
 *
 * @type {{
 *     name:string,
 *     icon:('google'|'microsoft'|'apple')
 * }[]}
 */

export default function services(){
    /**
     *
     * @type {{
     *     name:string,
     *     icon:('google'|'microsoft'|'apple')
     * }[]}
     */
    const [data,setData] = useState(serviceData)
    const [open,setOpen] = useState(false);
    const handleCloseModal = () => setOpen(false);
    const handleOpenModal = () => setOpen(true);

    const addService = (name,icon) =>{
        setData((services)=>{
            return [...services,{
                name:name,
                icon:icon
            }]
        })
    }

    function getData(index) {
        let buffer = [...data];
        buffer.splice(index,1);
        return buffer
    }


    return (
        <div style={styles.container}>
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
                    Settings
                </Typography>
            </Breadcrumbs>
            <SettingModal open={open} onClose={handleCloseModal} addService={addService}/>
            <div style={styles.list}>
                {
                    data.map((s,index)=>{
                        return (
                            <Account key={s.name} header={s.name}
                                     subHeader={'sync: 14:22'} icon={s.icon} index={index}
                                     onDelete={()=>setData(getData(index))}
                            />
                        )
                    })
                }
            </div>
            <Fab color="primary" aria-label="add" style={styles.Fab} onClick={handleOpenModal}>
                <Image src={PlusIcon} alt={"Plus"} style={styles.addIcon}/>
            </Fab>
        </div>
    )
}



const styles = {
    container:{
        height:'100vh',
        width:'100%',
        display:'flex',
        flexDirection:'column',
    },
    list:{
        flexGrow:1,
        padding:'1%'

    },
    Fab:{
        boxShadow:'none',
        height: '3vw',
        width: '3vw',
        position:'absolute',
        left:'90%',
        bottom:'5%',
        backgroundColor:'transparent'
    },
    addIcon:{
        width:'100%',
        height:'100%',
        color:colors.main
    }
}