import Nav from "./Nav";
import style from "../styles/Layout.module.css"

export default function Layout({children}){
    return(
        <>
           <Nav/>
            <main className={style.main}>
                <div className={style.container}>  
                        {children}
                </div>
            </main>
         </>
    )
}