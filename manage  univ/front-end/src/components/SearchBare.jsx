import React ,{ useState }from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import scan from './images/qr_code_scanner_black_24dp.svg'
//  import qrscan  from './QrScan'
import "./css/searchbar.css"
// import QrReader from 'react-qr-reader';

// import { Link } from 'react-router-dom';
// import { QrReader } from 'react-qr-reader';

const SearchBare = () => {
  // const nbr=1
  // const [result, setResult] = useState('');
{/* <QrReader
  delay={300}
  onError={(error) => console.log(error)}
  onScan={(result) => setResult(result)}
  style={{ width: '100%' }}
/> */}

  
  

    return (
        <div>
          
               <Form className="d-flex ">
               <button onClick="" style={{'border':'none'}}> <img className='blackImg' src={scan} alt="bag" style={{}}/></button>

               <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </div>
    );
}

export default SearchBare;
