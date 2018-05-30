import React, { Component } from 'react';


class frontPage extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid header">
                    <div className="row">

                        <div className="col-md-6 logo">
                            <p className="h1"> BESTme </p>
                        </div>
                        <div className="col-md-6 loginmenu">
                            <form className="form-container">
                                <input type="text" id="email-login" className="input-textbox" name="name" value="" placeholder="Email" />
                                <input type="text" id="password-login" className="input-textbox" name="name" value="" placeholder="Password" />
                                <button className="btn btn-default btn-lg login"> <a href='/lobby'>Login </a> </button>
                            </form>
                            <p style={{marginLeft:"10px", color:"white"}}>Not registered? <a id="New-account"> Create an account</a></p>
                            
                        </div>
                        {/* <div className="">
                        

                          
                        </div> */}

                    </div>
                </div>


                <div className="container-fluid home">
                    <div className="row">
                        <div className="col-md-6 hometext">
                            <p className="h1"> Here comes the professional social network platform that we've been waiting for </p>
                        </div>
                        <div className="col-md-6 signupmenu">

                            <div className="container1">
                                

                                {/* <div className="wrapper-signIn">
                                    <h1>Sign Up</h1>
                                    <hr />
                                    <form className="form-container" action="index.html" method="post">
                                    <ul>
                                        <input type="text" id="email-signin" className="input-signin-textbox" name="name" value="" placeholder="Email" />
                                        <input type="text" id="password-signin" className="input-signin-textbox" name="name" value="" placeholder="Password" />
                                        <input type="text" id="re-password-signin" className="input-signin-textbox" name="name" value="" placeholder="Repeat-Password" />
                                        <input type="button" className="input-signin-button" name="name" value="Sign Up" />
                                    </ul>
                                    </form>
                                </div> */}
                            </div>
                        </div>




                    </div>
                </div>


                <div className="container-fluid home1" style={{ textAlign: "center" }}>
                    <div className="row">

                        <div className="col-md-4" style={{ margin: "0 auto" }}>
                            <img src="img/earth-globe.png" alt="" className="img-responsive" style={{ margin: "0 auto" }} />
                            <p className="h3"> Show your own 'signature' CV!</p>
                            <p> Lorem LoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem</p>

                        </div>
                        <div className="col-md-4">
                            <img src="img/newspaper-folded.png" alt="" className="img-responsive" style={{ margin: "0 auto" }} />
                            <p className="h3"> Get the latest news in your industry </p>
                            <p> Lorem LoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/team.png" alt="" className="img-responsive" style={{ margin: "0 auto" }} />
                            <p className="h3"> Lets collaborate and find your A-team! </p>
                            <p> Lorem LoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid home2">
                    <div className="row">
                        <div className="col-md-6 image1" style={{ width: '50%', height: '500px' }}>
                            <img src="img/1.jpg" style={{ width: '100%', height: '100%' }} alt="" className="img-responsive" />
                        </div>
                        <div className="col-md-6" style={{ textAlign: 'center',paddingTop: '175px', width: '50%', height: '500px' }}>
                            <p className="h2"> "Choose a job you love, and you will have to work a day in your life, but how about if we really loves sleeping? You decide!"</p>
                        </div>
                        <div className="col-md-6" style={{ textAlign: 'center', paddingTop: '175px', width: '50%', height: '500px' }}>
                            <p className="h2"> "Sometimes the best time of my job is that the chair swivels. Keep it up!"</p>
                        </div>
                        <div className="col-md-6 image1" style={{ width: '50%', height: '500px' }}>
                            <img src="img/2.jpg" style={{ width: '100%', height: '100%', padding: '0px', }} alt="" className="img-responsive" />
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container-fluid footer">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="h3"> Our Office </p>
                                <p> lorem lorem lorem lorem lorem lorem 
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    Halo mas Lintang
                                </p>

                            </div>
                            <div className="col-md-3">
                                <p className="h3"> Twitter Feed </p>
                                <p> lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    Halo Mas Jeffri
                                </p>

                            </div>
                            <div className="col-md-3">
                                <p className="h3"> Newsletter </p>
                                <p> lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    Halo Purwadhika
                                </p>

                            </div>
                            <div className="col-md-3">
                                <p className="h3"> Meet Our Team </p>
                                <p> lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                    Halo Semuanya
                                </p>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
}
}

export default frontPage;