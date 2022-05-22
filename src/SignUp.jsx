import Transak from "./Transak.jsx"

function SignUp() {
    return(
        <div id="get-started">
            <h1 id="title">wengo events!</h1>
                <div id="homepage-text">
                    <h1>the wengo marathon is coming up!</h1>
                    <h4>register for 3 $matic!</h4>
                    <img id="marathon" src="https://demo.storj-ipfs.com/ipfs/QmRZdmuoesyqrBYoH1hsX7CXMJZeFvHT5vg5pRoWbF6dDP"/>
                    <h4>to add $matic to your account, use transak!</h4>
                    <Transak />
                </div>
        </div>
    )
}

export default SignUp; 