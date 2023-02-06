    import React from "react";
    import { useState } from "react";
import Bitcoin from "./Bitcoin";
import '../Style/SeeMore.css'

    const SeeMore= () => {
    const [less, setLess] = useState(false);
    return (
        <div>
        <section>
            <h5 className="intrest-cont">
            Intrested In CryptoCurrency Click the Button Below To Check The Current Market 
            </h5>
        </section>

        {less && <Moreinfo />}
        <section className="btnseeless">
            <button onClick={() => setLess(!less)} className="see-less-btn">
            {less ? "See Less" : "Click Here To See More"}
            </button>
        </section>
        
        </div>
    );
    };
    function Moreinfo() {
    return (
        <div>
        <div className="see-less">
            <div className="payment-cont">
                <Bitcoin/>
            <h5  className="intrest-cont">
                The constant demand as made Cryptocurrecies a Digital Gold used for
                alternative store of wealth on long term investments.
            </h5>
            </div>
        </div>
        
        </div>
    );
    }

    export default SeeMore;
