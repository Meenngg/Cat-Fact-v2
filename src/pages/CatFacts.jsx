import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const CatFacts = () => {
    const [catFact, setCatFact] = useState("");

    const meowClick = () => {
        axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    }

    useEffect(() => {
        meowClick();
    }, []);

    return ( 
        <div className="CatFacts">

                {/* ### CONTENT HERE ### */}
                <div className="fact-container">
                    <div className="cat-fact">
                        <div className="header">
                        <i className="uil uil-chat-info"></i>
                        </div>
                        <div className="content">
                            <p> <i>" </i>{catFact}<i> "</i></p>
                        </div>
                        <div className="footer">
                            <button onClick={meowClick}>meow!</button>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default CatFacts;
