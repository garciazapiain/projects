import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Home = () => {
    const [addClass, setaddClass] = useState(false);
    const [addClass2, setaddClass2] = useState(false);
    
    const addManualHover = () => {
        setaddClass(!addClass);
    }

    const myManualHover = () => {
        setaddClass2(!addClass2);
    }


    return (
                <>
                <div className='manualsHomePage'>
                    <div className={`${addClass ? 'addManualExpand':'manualsHomePage1'}`} onMouseEnter={addManualHover} onMouseLeave={addManualHover}>
                        <h2>Add Manual</h2>
                        <Link className="btn btn-primary" to='/manual/new'>Click</Link>
                    </div>
                    <div className={`${addClass2 ? 'myManualExpand':'manualsHomePage2'}`} onMouseEnter={myManualHover} onMouseLeave={myManualHover}>
                        <h2>My Manuals</h2>
                        <Link className="btn btn-primary" to='/manual/mymanuals'>Click</Link>
                        </div>
                </div>
                <div id='aboutHomePage' className='aboutHomePage'
                    >
                    <h3>About</h3>
                </div>
                <div id='contactHomePage' className='contactHomePage'
                    >
                    <h3>Contact</h3>
                </div>
                </>
         )
}

export default Home;