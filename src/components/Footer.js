import {} from 'react-bootstrap'
import '../styles/landingPage.css'


const Footer = () => {
    return(
        <footer class=" text-center text-lg-start bg-body-tertiary text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-black bg-dark">
                <div className="me-5 d-lg-block text-white">
                    <span>Get connected with us on social networks:</span>
                </div>
                 {/*  */}
                <div className='text-white justify-content-right  ' >
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"> Facebook</i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-instagram"> Instagram</i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-google"> Google</i>
                </a>    
                </div>
            </section>
                 {/*  */}
            <section className="d-flex justify-items-start bg-dark border-bottom border-black">
                    <div class="container text-center text-md-start mt-5">
                        {/* Start Grid Row */}
                        <div class="row mt-1">
                            {/* Grid Column */}
                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
                                    {/* Content */}
                                    <h6 class="text-uppercase fw-bold mb-4 ">
                                        <i class="fas fa-gem me-3"></i>MOISUSHI
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                    {/* End Of Content */}
                                </div>
                            {/* Grid Column */}
                            
                            {/* Grid Column */}
                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                
                                </div>
                            {/* Grid Column */}

                            {/* Grid Column */}
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                               
                                </div>
                            {/* Grid Column  */}

                            {/* Grid Column */}
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                  
                                </div>
                            {/* Grid Column  */}

                            {/* Grid Column */}
                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
                                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i class="fas fa-home me-3"></i> Indonesia, Surabaya, ID</p>
                                    <p>
                                        <i class="fas fa-envelope me-3"></i>
                                        Moisushi@gmail.com.id
                                    </p>
                                    <p><i class="fas fa-phone me-3"></i> + 62 081 567 488</p>
                                </div>
                            {/* Grid Column */}
                        </div>
                        {/*End Grid Row */}
                    </div>
            </section>
                    {/* Copyright Section  */}
                    <div class="text-center p-4 text-white bg-dark">
                        © 2021 Copyright:
                        <a class="text-reset fw-bold"></a>
                    </div>
                    {/* End of Copyright section */}
        </footer>
    );
}
export default Footer