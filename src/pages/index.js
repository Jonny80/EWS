import {Button} from "@mui/material";
import {colors} from "@/config/colors";
import { useRouter } from 'next/router';

export default function Home() {

    const router = useRouter()

  return (
    <div style={{display:'flex',height:'100vh',width:'100vw',justifyContent:'center',alignItems:'center',backgroundColor:colors.main}}>
        <Button onClick={()=>router.push('/main')} variant={'outlined'} style={{borderRadius:'0.3rem',backgroundColor:colors.white}}>Install</Button>
    </div>
  )
}
