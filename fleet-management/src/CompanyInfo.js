import Card from 'react-bootstrap/Card';
import { Image } from './Image';

export function CompanyInfo() {
  return (
    <>
    <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center'  }} >
      <Card border="BLACK" style={{  flex: 1 }} >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>COMPANY INFORMATION</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            A car is a means of transport used for traveling from one place to another.
             This is a four-wheeler used by individuals or family members. We all use cars in 
             our daily lives to go from one place to another for work. A car is a beautiful vehicle that
              has comfortable seats, AC, and windows. It is basically used to reduce travel distance and time.
               Due to increased automobile industries, we see different types of cars ranging from simple to the
                most luxurious ones. Every individual wishes to buy or purchase a car which makes their journey a 
                comfortable and enjoyable experience.
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ flex: 1, marginLeft: '20px' }}>
        <Image height="100px" width="100px"/>   
        </div>

</div>  

          </>
  );
}

