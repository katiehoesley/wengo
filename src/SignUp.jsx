import Transak from "./Transak.jsx"

function SignUp() {
    return(
        <div id="get-started">
            <h1 id="title">wengo events!</h1>
                <div id="homepage-text">
                    <h1>what's comin' up?</h1>
                    <h4>the wengo marathon is coming up! register for 3 $matic!</h4>
                </div>
            <h4>to add $matic to your account, use transak!</h4>
            <Transak />
        </div>
    )
}

export default SignUp; 