import styles from '@/styles/Home.module.css'
import {Button} from "@mui/material";
export default function Home() {
  return (
    <div style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>
        <Button variant={'outlined'} style={{borderRadius:'0.3rem'}}>Install</Button>
    </div>
  )
}
