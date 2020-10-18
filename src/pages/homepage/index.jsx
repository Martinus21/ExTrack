import React from 'react'

// IMPORT IMAGES
import Home_Image from '../../assets/pages/ExTrack.png'

export default function HomePage() {
    return (
        <div className="et-content">
            
            <div className="et-homepages">
                <div className="et-homepages-left">
                    <h1><span style={{color: "red"}}>Tracking Barang </span>ke Seluruh Indonesia</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className="et-button-groupHomepage">
                        <div className="et-button-groupHomepage-resi">
                            <button className="et-button-resi">
                                Cek Resi
                            </button>
                        </div>
                        <div className="et-button-groupHomepage-tarif">
                            <button className="et-button-tarif">
                                Cek Tarif
                            </button>
                        </div>
                    </div>
                </div>

                <div className="et-homepages-right">
                    <img src={Home_Image} alt="home-img" width="90vh" height="60vh" />
                </div>
            </div>

        </div>
    )
}
