import React from 'react';
import '../App.css'
class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
            <div className="slider-area">
            <div className="slider">
                <div id="bg-slider" className="owl-carousel owl-theme">

                    <div className="item"><img src="/assets/img/slide1/slider-image-1.jpg" alt="img" /></div>
                    <div className="item"><img src="/assets/img/slide1/slider-image-2.jpg" alt="img" /></div>
                    <div className="item"><img src="/assets/img/slide1/slider-image-1.jpg" alt="img" /></div>

                </div>
            </div>
            
            <div className="slider-content">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                        <br/><br/><br/><br/>
                        <h2>property Searching Just Got So Easy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt deleniti, ullam commodi sit ipsam laboriosam velit adipisci quibusdam aliquam teneturo!</p>

                    </div>

                </div>
            </div>
        </div>

        <div className="content-area home-area-1 recent-property" style={{ backgroundcolor: '#FCFCFC', paddingbottom: '55px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                 
                        <h2>Top submitted property</h2>
                        <p>Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies . </p>
                    </div>
                </div>

                <div className="row">
                    <div className="proerty-th">
                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="/property-1" ><img src="/assets/img/demo/property-1.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="/property-1" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="/property-2" ><img src="/assets/img/demo/property-2.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-2" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="/property-3" ><img src="/assets/img/demo/property-3.jpg" alt="img" /></a>

                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="/property-3" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1" ><img src="/assets/img/demo/property-4.jpg"alt="img"  /></a>

                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="/property-3" ><img src="/assets/img/demo/property-2.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="/property-3" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="/property-2" ><img src="/assets/img/demo/property-4.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="/property-2" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="/property-1" ><img src="/assets/img/demo/property-3.jpg" alt="img" /></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="/property-1" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-tree more-proerty text-center">
                                <div className="item-tree-icon">
                                    <i className="fa fa-th"></i>
                                </div>
                                <div className="more-entry overflow">
                                    <h5><a href="/property-1" >CAN'T DECIDE ? </a></h5>
                                    <h5 className="tree-sub-ttl">Show all properties</h5>
                                    <button className="btn border-btn more-black" value="All properties">All properties</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="Welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 Welcome-entry  col-sm-12">
                        <div className="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
                            <div className="welcome_text wow fadeInLeft" data-wow-delay="0.3s" data-wow-offset="100">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                              
                                        <h2>ALOHA HOME </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <div  className="welcome_services wow fadeInRight" data-wow-delay="0.3s" data-wow-offset="100">
                                <div className="row">
                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-home pe-4x"></i>
                                            </div>
                                            <h3>Any property</h3>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-users pe-4x"></i>
                                            </div>
                                            <h3>More Clients</h3>
                                        </div>
                                    </div>


                                    <div className="col-xs-12 text-center">
                                        <i className="welcome-circle"></i>
                                    </div>

                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-notebook pe-4x"></i>
                                            </div>
                                            <h3>Easy to use</h3>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 m-padding">
                                        <div className="welcome-estate">
                                            <div className="welcome-icon">
                                                <i className="pe-7s-help2 pe-4x"></i>
                                            </div>
                                            <h3>Any help </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br/><br/><br/><br/><br/><br/>


        </div>
        );
    }
}

export default index;