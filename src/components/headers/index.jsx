import React from 'react'
import { Link } from 'react-router-dom'

// IMPORT IMAGES
import LogoET from '../../assets/logos/ExTrack.png'

function Headers() {
    return (
        <div className="et-headers">
            <div className="et-headers-container">
                <div className="et-headers-left">
                    <img src={LogoET} alt="Logo_ET"/>
                </div>
                <div className="et-headers-right">
                    <ul className="et-headers-right-ul">
                        <li>
                            <Link className="et-headers-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="et-headers-link" to="/cekresi">
                                Cek Resi
                            </Link>
                        </li>
                        <li>
                            <Link className="et-headers-link" to="/cektarif">
                                Cek Tarif
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Headers