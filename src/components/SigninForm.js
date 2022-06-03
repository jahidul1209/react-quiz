
import style from "../styles/Signup.module.css"
import Form from "./Form"
import TextInput from "./TextInput"
import Button from "./Button"

export default function SigninForm(){
    return(
        <>
                  <Form ClassName = {style.login}>
                       <TextInput 
                          type="text"
                          placeholder="Enter email"
                          icon = "alternate_email" />
                        <TextInput 
                          type="password"
                          placeholder="Enter password"
                          icon = "lock" />
                         <Button>Submit now</Button>
                         <div class="info">Don't have an account? 
                              <a href="signup.html">Signup</a> 
                              instead.
                         </div>
                   </Form>
        </>
    )
}