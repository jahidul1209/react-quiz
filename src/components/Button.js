import style from "../styles/Button.module.css"
export default function Button({children}){
    return(
        <div className={style.button}>
            <span>{children}</span>
          </div>
    )
}