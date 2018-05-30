import React, {Component} from 'react';


class afterlogin extends Component {
  render() {
    return (
      <div className="App">

        <div className="container-fluid headerlobi">
          <div className="row">
            <div className="col-md-6 logo">
              <p className="h1"> <a href='/FrontPage'> BESTme  </a> </p>
            </div>

            <div className="col-md-6 profileku">
              <a href='/myprofile' className="profileku2">
                <img src="img/pika.jpg" style={{ width: '30px', height: '30px' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid carouseltampilan">
          <div className="row">
            <div className="col-md-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              <div className="carousel slide" id="imagecarousel" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#imagecarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#imagecarousel" data-slide-to="1"></li>
                  <li data-target="#imagecarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <img src="img/caro1.jpeg" alt="" style={{ width: '100%', height: '580px' }} />
                  </div>

                  <div className="item">
                    <img src="img/caro2.jpg" alt="" style={{ width: '100%', height: '580px' }} />
                  </div>

                  <div className="item">
                    <img src="img/caro3.jpg" alt="" style={{ width: '100%', height: '580px' }} />
                  </div>
                </div>

                <a className="left carousel-control" href="#imagecarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"> </span>
                  <span className="sr-only"> Previous </span>
                </a>
                <a className="right carousel-control" href="#imagecarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"> </span>
                  <span className="sr-only"> Next </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* </div>
      </div>
          </div> */}


        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 left-feild">
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Popular Creative Filds
                      </h3>
                <div className="creative_filds_block">
                  <div className="ul">
                    <a data-filter=".category-1" className="filter">Graphic Design </a>
                    <a data-filter=".category-2" className="filter">Photography </a>
                    <a data-filter=".category-3" className="filter">Interaction Design </a>
                    <a data-filter=".category-4" className="filter">Art Direction </a>
                    <a data-filter=".category-5" className="filter">Illustration </a>
                  </div>
                </div>
              </div>
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Popular Tags
                      </h3>
              </div>

              <div className="tags_block clearfix">
                <ul>
                  <li>
                    <a data-filter=".category-6" className="filter">photoshop</a>
                  </li>
                  <li>
                    <a data-filter=".category-1" className="filter">graphic</a>
                  </li>
                  <li>
                    <a data-filter=".category-2" className="filter">art</a>
                  </li>
                  <li>
                    <a data-filter=".category-3" className="filter">website</a>
                  </li>
                  <li>
                    <a data-filter=".category-4" className="filter">logo</a>
                  </li>
                  <li>
                    <a data-filter=".category-5" className="filter">identity</a>
                  </li>
                  <li>
                    <a data-filter=".category-6" className="filter">logo design</a>
                  </li>
                  <li>
                    <a data-filter=".category-1" className="filter">interactive</a>
                  </li>
                  <li>
                    <a data-filter=".category-2" className="filter">blue</a>
                  </li>
                  <li>
                    <a data-filter=".category-3" className="filter active">branding</a>
                  </li>
                </ul>
              </div>
            </div>



            <div className="usersprofile">
              <div className="col-md-2">
                <div className="card h-100">
                  <a href="#">
                    <img src="img/user1.jpg" alt="" style={{ width: '100%', height: '200px' }} />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Western Horse</a>
                    </h4>
                    <h5>Photography</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">by Kimhee</small>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card h-100">
                  <a href="#">
                    <img src="img/user2.jpg" alt="" style={{ width: '100%', height: '200px' }} />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Cucok Rowo</a>
                    </h4>
                    <h5>Graphic Design</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">by Dustin</small>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card h-100">
                  <a href="#">
                    <img src="img/user3.jpg" alt="" style={{ width: '100%', height: '200px' }} />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Hijab Pelangi</a>
                    </h4>
                    <h5>Design</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">by Mona</small>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card h-100">
                  <a href="#">
                    <img src="img/user4.jpg" alt="" style={{ width: '100%', height: '200px' }} />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Sakina Vibe</a>
                    </h4>
                    <h5>Interior Design</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">by MoonRabbit</small>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card h-100">
                  <a href="#">
                    <img src="img/user5.jpg" alt="" style={{ width: '100%', height: '200px' }} />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Zero DP House</a>
                    </h4>
                    <h5>Architecture</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">by Kang Asep</small>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card h-100">
                  <a href="#">
                    <img src="img/user6.jpg" alt="" style={{ width: '100%', height: '200px' }} />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Hot Mess</a>
                    </h4>
                    <h5>Illustration</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <p className="card-footer">
                    <small className="text-muted">by Xmen</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default afterlogin;