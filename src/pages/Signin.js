import Illustration from "../components/Illustration"
import SigninForm from "../components/SigninForm"

export default function Signin(){
    return(
        <>
           <h1>Login to your account</h1>
              <div class="column">
                  <Illustration />
                 <SigninForm/>
              </div> 
        </>
    )
}