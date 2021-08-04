import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({ leader }) {
    return(
        <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={leader.image} alt={leader.name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.description}</p>
                </Media>
            </Media>
        </div>
    );
}


function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={leader} />            
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>The history of the real casino began with the first gambling establishment in Europe legally opened in Venice in 1638. The casino was called Il Ridotto. The term “casino” itself was formed from the Italian word meaning “a small house”.

The origin of this word is explained by the fact that before the opening of the first legal casino, gambling was organized in private houses. Often, along with gambling, the audience was entertained by dancing and music.</p>
                    
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">30 July. 2021</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">MK  Casino Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">“It's hard to walk away from a winning streak, even harder to leave the table when you're on a losing one.”</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">― Cara Bertoia, Cruise Quarters - a Novel About Casinos and Cruise Ships</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>


            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                
                <div className="col-12">
                    <div className="row">
                        <Media list>
                            {leaders}
                        </Media>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default About;    