import React from 'react'

const MailingList = () => {
    return (
        <div className="mailing-list">
            <div className="container">
                <h3>Join Our Newsletter</h3>
                <div>
                    Join our email subscription now to get update <br />
                    on production and coupon
                </div>
                <div className="d-flex justify-content-between">
                    <div style={{ width: "50%" }}>
                        <div className="mail-box d-flex">
                            <input type="text" className="form-control"/> 
                            <button className="btn btn-primary">Subscribe</button>                       
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MailingList
