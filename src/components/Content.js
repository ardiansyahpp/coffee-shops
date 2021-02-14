import gomucoffee from "../assets/images/gomucoffee.png";

const Content = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-3">
                            <h1 className="is-size-3-mobile is-size-1-desktop title">
                                Gomu Coffee
                            </h1>
                            <h3 className="is-size-4-mobile is-size-3-desktop subtitle">
                                Dark Roasted Bean
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, error! Eius ducimus magni culpa consectetur accusantium consequuntur qui laudantium voluptate.</p>
                        </div>
                        <div className="column is-6 has-text-centered">
                            <img src={gomucoffee} alt="gomucoffee" />
                        </div>
                        <div className="column is-3">
                            <div className="is-size-4 mb-4">Rp. 250.000</div>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolor officiis autem, odit facilis exercitationem.</p>
                            <button className="button is-primary">BUY</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="tabs is-boxed is-small is-toggle is-toggle-rounded">
                        <ul>
                            <li className='is-active'><a>Product Detail</a></li>
                            <li><a>Delivery Information</a></li>
                            <li><a>Frequently Q&A</a></li>
                        </ul>
                    </div>
                    <div className="px-5">
                        <h3 className="is-size-4">Product Detail</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem architecto modi ipsum repellendus accusantium natus, est dolor impedit quae distinctio mollitia sed magnam nostrum soluta hic, blanditiis enim incidunt aliquid nemo quo reprehenderit. Iste veniam odio, ut possimus doloribus quos consequuntur expedita. A modi, architecto placeat sunt deserunt libero?</p>
                    </div>
                    <div className="px-5">
                        <h3 className="is-size-4">Delivery Information</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem architecto modi ipsum repellendus accusantium natus, est dolor impedit quae distinctio mollitia sed magnam nostrum soluta hic, blanditiis enim incidunt aliquid nemo quo reprehenderit. Iste veniam odio, ut possimus doloribus quos consequuntur expedita. A modi, architecto placeat sunt deserunt libero?</p>
                    </div>
                    <div className="px-5">
                        <h3 className="is-size-4">Frequently Q&A</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem architecto modi ipsum repellendus accusantium natus, est dolor impedit quae distinctio mollitia sed magnam nostrum soluta hic, blanditiis enim incidunt aliquid nemo quo reprehenderit. Iste veniam odio, ut possimus doloribus quos consequuntur expedita. A modi, architecto placeat sunt deserunt libero?</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;