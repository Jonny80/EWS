import HomeIcon from "@mui/icons-material/Home";
import {Breadcrumbs, Chip, IconButton} from "@mui/material";
import {colors} from "@/config/colors";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
export default function SubHeader({path,list=true,onChange=null}){
    return (
        <div role="presentation" style={styles.container}>
        <Breadcrumbs aria-label="breadcrumb" style={{fontSize:'2vw'}} separator="›">
            <Chip
                sx={{
                    '&:hover, &:focus': {
                        backgroundColor: colors.grey
                    }
                }}
                component="a"
                href="/main"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
            />
            {path.map((p)=> {
                return (<Chip component="a"
                              key={p.label}
                              sx={{
                                  '&:hover, &:focus': {
                                      backgroundColor: colors.grey
                                  }
                              }}
                      href={p.href}
                      label={p.label}
                      icon={p.icon}
                />)
            })}
        </Breadcrumbs>
            {
                onChange &&<IconButton color={'primary'} onClick={onChange} style={{fontSize:'2vw'}}>
                    {
                        list ? <FormatListBulletedIcon fontSize={'2vw'}/> : <GridViewIcon fontSize={'2vw'}/>
                    }
                </IconButton>
            }

        </div>
    )
}

const styles = {
    container:{
        padding:'0 1vw 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
}
}