
 
  import React from 'react';
  import { Container, Row, Col, Card, Button } from 'react-bootstrap';
  
  const Membership = () => {
    return (
      <Container fluid className="py-5" style={{ backgroundColor: '#000', color: '#fff' }}>
        {/* Section Title */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h1>Choose Your Plan</h1>
            <p className="lead">Find the perfect plan for your AI companionship</p>
          </Col>
        </Row>
  
        {/* Pricing Cards */}
        <Row className="justify-content-center">
          {/* Starter Plan */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 text-center" style={{ backgroundColor: 'black', border: '2px solid white', color:"white" }}>
              <Card.Body>
                <Card.Title className="mb-3">Starter</Card.Title>
                <h2 className="mb-3">
                  $0 <small style={{ fontSize: '0.6em' }}>/ month</small>
                </h2>
                <p>Your gateway to AI companionship</p>
  
                {/* Plan Highlights */}
                <ul className="list-unstyled my-4">
                  <li>100 Messages / day</li>
                  <li>100 Tokens</li>
                </ul>
  
                {/* Call to Action */}
                <Button variant="outline-light" className="w-100">
                  Upgrade now
                </Button>
  
                <hr style={{ backgroundColor: '#333' }} />
  
                {/* Features */}
                <p className="fw-bold">Features included:</p>
                <ul className="list-unstyled">
                  <li>State of the Art Conversation Engine</li>
                  <li>Slow response time</li>
                  <li>Limited chat history</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
  
          {/* Chat Plus Plan */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 text-center position-relative" style={{ backgroundColor: '#111', border: '2px solid #e83e8c',color:"white"  }}>
              {/* Ribbon / Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#e83e8c',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '0 0 0 8px',
                  fontWeight: 'bold',
                }}
              >
                Most Popular
              </div>
  
              <Card.Body>
                <Card.Title className="mb-3">Chat Plus</Card.Title>
                <h2 className="mb-3">
                  $6.99 <small style={{ fontSize: '0.6em' }}>/ month</small>
                </h2>
                <p>Engage more deeply and frequently</p>
  
                {/* Plan Highlights */}
                <ul className="list-unstyled my-4">
                  <li>1,000 Messages / day</li>
                  <li>250 Tokens / month</li>
                </ul>
  
                {/* Call to Action */}
                <Button variant="outline-light" className="w-100">
                  Upgrade now
                </Button>
  
                <hr style={{ backgroundColor: '#333' }} />
  
                {/* Features */}
                <p className="fw-bold">Features included:</p>
                <ul className="list-unstyled">
                  <li>State of the Art Conversation Engine</li>
                  <li>Quick response time</li>
                  <li>Unlimited chat history</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
  
          {/* Pinnacle Pass Plan */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 text-center position-relative" style={{ backgroundColor: '#111', border: '2px solid #ffc107',color:"white"  }}>
              {/* Ribbon / Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#ffc107',
                  color: '#000',
                  padding: '0.5rem 1rem',
                  borderRadius: '0 0 0 8px',
                  fontWeight: 'bold',
                }}
              >
                Best Value
              </div>
  
              <Card.Body>
                <Card.Title className="mb-3">Pinnacle Pass</Card.Title>
                <h2 className="mb-3">
                  $29.99 <small style={{ fontSize: '0.6em' }}>/ month</small>
                </h2>
                <p>Fullest AI companionship experience</p>
  
                {/* Plan Highlights */}
                <ul className="list-unstyled my-4">
                  <li>Unlimited Messages / day</li>
                  <li>1,500 Tokens / month</li>
                </ul>
  
                {/* Call to Action */}
                <Button variant="outline-light" className="w-100">
                  Upgrade now
                </Button>
  
                <hr style={{ backgroundColor: '#333' }} />
  
                {/* Features */}
                <p className="fw-bold">More features will be released in the future:</p>
                <ul className="list-unstyled">
                  <li>State of the Art Conversation Engine</li>
                  <li>Quick response time</li>
                  <li>Unlimited chat history</li>
                  <li>Character chat photos</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Membership;
  