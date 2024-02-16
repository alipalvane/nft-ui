

const Wallet = () => {
  return (
    <div className="container-fluid container-xl mt-5">
            <div className="header_container_title mb-5 d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center gap-3">
                    <div
                        className="d-flex align-items-center justify-content-center bg_gradient_main_site rounded-circle icon_header_container">
                        <img src="img/wallet2.png" alt=""/>
                    </div>
                    <div className="text-light">
                        <h5 className="fs-3 fw-medium">کیف پــول</h5>
                        <span className="fs-4 fw-light">
                            Wallet
                        </span>
                    </div>
                </div>

                <div className="">
                    <a href="#">
                        <span className="fs-5 text-light">مشاهده همه</span>
                        <img src="img/arrowleft.png" className="arrowleft" alt=""/>
                    </a>
                </div>
            </div>
            <div className="row row-gap-3">

                <div className="col-6 col-sm-4 col-xl-2">
                    <div className="wallet_box  rounded  wallet_box_6 position-relative">
                        <div className="rounded h-100 d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="img/Group 19.png" alt=""/>
                            </div>
                            <div>
                                <span className="text-secondary fs-4 mt-4 d-block">Meta Mask</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-xl-2">
                    <div className="wallet_box  rounded  wallet_box_2 position-relative">
                        <div className="rounded h-100 d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="img/pngaaa 1.png" alt=""/>
                            </div>
                            <div>
                                <span className="text-secondary fs-4 mt-4 d-block">Coinbase</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-xl-2">
                    <div className="wallet_box  rounded  wallet_box_3 position-relative">
                        <div className="rounded h-100 d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="img/image 1.png" alt=""/>
                            </div>
                            <div>
                                <span className="text-secondary fs-4 mt-4 d-block">Exodus</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-xl-2">
                    <div className="wallet_box  rounded  wallet_box_4 position-relative">
                        <div className="rounded h-100 d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="img/uniswap-coinuni.png" alt=""/>
                            </div>
                            <div>
                                <span className="text-secondary fs-4 mt-4 d-block">Uniswap</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-xl-2">
                    <div className="wallet_box  rounded  wallet_box_5 position-relative">
                        <div className="rounded h-100 d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="img/Group 25.png" alt=""/>
                            </div>
                            <div>
                                <span className="text-secondary fs-4 mt-4 d-block">Meta Mask</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-xl-2">
                    <div className="wallet_box  rounded  wallet_box_6 position-relative">
                        <div className="rounded h-100 d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="img/Group 19.png" alt=""/>
                            </div>
                            <div>
                                <span className="text-secondary fs-4 mt-4 d-block">Meta Mask</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Wallet