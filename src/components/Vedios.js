import style from "../styles/Vedios.module.css"
import Vedio from "./Vedio"

export default function Vedios(){
    return(
        <div className={style.videos}>
              <Vedio/>
              <Vedio/>
              <Vedio/> 
              <Vedio/>
              <Vedio/>
              <Vedio/>
        </div>
    )
}