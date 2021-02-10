import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Row,
    Table
} from 'reactstrap';
import { IconCard } from 'components/cards';
import { Link } from 'react-router-dom';

/**
 * Index Page
 */
const IndexPage = () => (
    <div className="IndexPage">
        <Container fluid>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/">Dashboard</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Overview</BreadcrumbItem>
            </Breadcrumb>
            <Row>
                <Col xl="3" sm="6" className="mb-3">
                    <IconCard
                        color="primary"
                        icon="comments"
                        path="blank"
                        title="26 New Messages!"
                    />
                </Col>
                <Col xl="3" sm="6" className="mb-3">
                    <IconCard color="warning" icon="list" path="blank" title="11 New Tasks!" />
                </Col>
                <Col xl="3" sm="6" className="mb-3">
                    <IconCard
                        color="success"
                        icon="shopping-cart"
                        path="blank"
                        title="123 New Orders!"
                    />
                </Col>
                <Col xl="3" sm="6" className="mb-3">
                    <IconCard
                        color="danger"
                        icon="life-ring"
                        path="blank"
                        title="13 New Tickets!"
                    />
                </Col>
            </Row>
            <Card className="mb-3">
                <CardHeader tag="h3">Table</CardHeader>
                <Table bordered className="mb-0" responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nicky Ellis</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>£32,800</td>
                        </tr>
                        <tr>
                            <td>Arissa Sandoval</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>£70,750</td>
                        </tr>
                        <tr>
                            <td>Tyreece Beltran</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009/01/12</td>
                            <td>£86,000</td>
                        </tr>
                        <tr>
                            <td>Elicia Caldwell</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012/03/29</td>
                            <td>£33,060</td>
                        </tr>
                        <tr>
                            <td>Kendrick Crosby</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008/11/28</td>
                            <td>£62,700</td>
                        </tr>
                        <tr>
                            <td>Lindsay Small</td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2012/12/02</td>
                            <td>£72,000</td>
                        </tr>
                        <tr>
                            <td>Adrianna Carter</td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012/08/06</td>
                            <td>£17,500</td>
                        </tr>
                        <tr>
                            <td>Hubert Sellers</td>
                            <td>Integration Specialist</td>
                            <td>Tokyo</td>
                            <td>55</td>
                            <td>2010/10/14</td>
                            <td>£27,900</td>
                        </tr>
                        <tr>
                            <td>Farrell Dyer</td>
                            <td>Javascript Developer</td>
                            <td>San Francisco</td>
                            <td>39</td>
                            <td>2009/09/15</td>
                            <td>£25,500</td>
                        </tr>
                        <tr>
                            <td>Bailey Potts</td>
                            <td>Software Engineer</td>
                            <td>Edinburgh</td>
                            <td>23</td>
                            <td>2008/12/13</td>
                            <td>£103,600</td>
                        </tr>
                        <tr>
                            <td>Rebeca Greenaway</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>30</td>
                            <td>2008/12/19</td>
                            <td>£90,560</td>
                        </tr>
                        <tr>
                            <td>Quinn Flynn</td>
                            <td>Support Lead</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2013/03/03</td>
                            <td>£34,000</td>
                        </tr>
                        <tr>
                            <td>Charde Marshall</td>
                            <td>Regional Director</td>
                            <td>San Francisco</td>
                            <td>36</td>
                            <td>2008/10/16</td>
                            <td>£47,600</td>
                        </tr>
                        <tr>
                            <td>Haley Kennedy</td>
                            <td>Senior Marketing Designer</td>
                            <td>London</td>
                            <td>43</td>
                            <td>2012/12/18</td>
                            <td>£31,500</td>
                        </tr>
                        <tr>
                            <td>Tatyana Fitzpatrick</td>
                            <td>Regional Director</td>
                            <td>London</td>
                            <td>19</td>
                            <td>2010/03/17</td>
                            <td>£35,750</td>
                        </tr>
                        <tr>
                            <td>Michael Silva</td>
                            <td>Marketing Designer</td>
                            <td>London</td>
                            <td>66</td>
                            <td>2012/11/27</td>
                            <td>£98,500</td>
                        </tr>
                    </tbody>
                </Table>
                <CardFooter className="small text-muted">Updated yesterday at 11:59 PM</CardFooter>
            </Card>
        </Container>
    </div>
);

export default IndexPage;
