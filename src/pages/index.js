import { useRouter } from 'next/router';
import {Button} from "@mui/material";
import {colors} from "@/config/colors";
import {useEffect, useState} from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Home() {
    const [supportsPWA, setSupportsPWA] = useState(false);

    const [promptInstall, setPromptInstall] = useState(null);


    const router = useRouter();
    useEffect(() => {
        if (window.matchMedia("(display-mode: standalone)").matches && !(process.env.NEXT_PUBLIC_DEBUG==="True")){
            router.push("/main");
        }
        const handler = (e) => {
            e.preventDefault();
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onInstall = (evt) => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
        promptInstall.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                router.push("/main")
            } else {
                console.log("PWA setup rejected");
            }
        });
    };

  return (
      <div style={styles.container}>
          <div style={styles.card}>
              <div style={styles.header}>
                  Wollen Sie diese App als PWA installieren?
              </div>
              <div style={styles.buttons}>
                  {supportsPWA ?
                      <Button variant={'outlined'} style={styles.button} onClick={onInstall} disabled={!supportsPWA}>
                          Ja
                      </Button> :
                      <LoadingButton variant={'outlined'}  loading
                                     style={{borderRadius: '0.3rem', backgroundColor: colors.white}}/>
                  }
                  <Button variant={'outlined'} style={styles.button} onClick={()=>router.push('/main')}>
                      Nein
                  </Button>
              </div>

          </div>
      </div>
  )
}



const styles = {
    container:{
        display:'flex',
        height:'100vh',
        width:'100vw',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.main
    },
    card:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-around',
        width:"35%",
        height:'50%',
    },
    header:{
        textAlign:'center',
        color:'white',
        fontFamily:'sans-serif',
        fontSize:'2rem'
    },
    buttons:{
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        width:'50%',
        justifyContent: 'space-between'
    },
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.white
    }
}