import React, { Component } from 'react';


class profiel extends Component {
    render() {
        return (



            <div>
                <div className="container-fluid" style={{
                    background: 'url(https://d2hn7jzlo6ol55.cloudfront.net/wp-content/uploads/2016/12/bw-professional-package-header.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '700px'
                }}>
                    <div className="row">
                        <div className="col-md-12 namaprofil">
                            <h1 className="nama"> RAEDI NURDIANSYAH DOE </h1>
                        </div>
                        <div className="col-md-12">
                            <ul className="navcustom">
                                <li class="col-md-3 navprof"> <a href="#" > My Portfolio </a></li>
                                <li class="col-md-3 navprof"> <a href="#"> My Connection </a></li>
                                <li class="col-md-3 navprof"> <a href="#"> Saved Archives </a></li>
                                <li class="col-md-3 navprof"> <a href="#"> My Team </a></li>
                            </ul>

                        </div>
                        <div class="col-md-12" style={{textAlign:'center', paddingTop:'500px'}}>
                            <button> <a href='/FrontPage'> HOME </a> </button>
                        </div>


                    </div>
                </div>

                
            </div>




        );
    };
}



export default profiel;