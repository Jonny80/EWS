import {Button} from "@mui/material";
import {colors} from "@/config/colors";
export default function Home() {
  return (
    <div style={{display:'flex',height:'100vh',width:'100vw',justifyContent:'center',alignItems:'center',backgroundColor:colors.main}}>
        <Button variant={'outlined'} style={{borderRadius:'0.3rem',backgroundColor:colors.white}}>Install</Button>
    </div>
  )
}
