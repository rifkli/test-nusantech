import React, { useState } from 'react'; 
import { 
 Form,
 InputGroup, 
 FormGroup,
 Input,
 Container,
 Button,
 Card,
 CardBody,
 Row,
 Col,
} from 'reactstrap';
import './App.css';
const App =()=>  {

    const [number1, setNumber1] = useState({value:null, checked:false});
    const [number2, setNumber2] = useState({value:null, checked:false});
    const [number3, setNumber3] = useState({value:null, checked:false});
    const [total, setTotal] = useState(0);
    const [error, setError] = useState("");
    // const [checkbox1, setCheckbox1] = useState("");
    // const [checkbox2, setCheckbox2] = useState("");
    // const [checkbox3, setCheckbox3] = useState("");

    const calculate=(option)=>{
        // let target = e.target;
        // let value = target.value;
        const value =[]
        if(number1.checked) {
          value.push(number1.value)
        }
        if(number2.checked){
          value.push(number2.value)
        }
        if(number3.checked){
          value.push(number3.value)
        }

        if(value.length <= 1){
          setError('enable checklis and the value')
          setTimeout(()=>{
            setError(null)
          }, 5000);
        }else{
          switch (option){
            case 'tambah':
            tambah(value)
            break;
            case 'kurang':
            kurang(value)
            break;
            case 'bagi':
            bagi(value)
            break;
            case 'kali':
              kali(value)
              break;
          default:
            break;  
          }
        }
      }

      const tambah = (value)=>{
        let total = +value[0]
        for (let i = 1; i < value.length; i++){
          total += +value[i];
        }
        setTotal(total)
      }
      const kurang = (value)=>{
        let total = +value[0]
        for (let i = 1; i < value.length; i++){
          total -= +value[i];
        }
        setTotal(total)
      }
      const kali = (value)=>{
        let total = +value[0]
        for (let i = 1; i < value.length; i++){
          total *= +value[i];
        }
        setTotal(total)
      }
      const bagi = (value)=>{
        let total = +value[0]
        for (let i = 1; i < value.length; i++){
          total /= +value[i];
        }
        setTotal(total)
      }

      return (
        <Container className="App" >
        
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
        <CardBody>
        <Form>
        <FormGroup className="form-group">
        <Row>
        <Col sm="10">
        <Input type='number' className="input-form btn-block" onChange={(e) => setNumber1({ ...number1, value: e.target.value })} value={number1.value} placeholder="Input the value"/>
        </Col>
        <Col sm="2">
        <Input type='checkbox' checked={number1.checked} onChange={(e) => setNumber1({ ...number1, checked: !number1.checked })} />
        </Col>
        </Row>
        </FormGroup>
        <FormGroup className="form-group">
        <Row>
        <Col sm="10">
        <Input type='number' className="input-form btn-block" onChange={(e) => setNumber2({ ...number2, value: e.target.value })} value={number2.value} placeholder="Input the value"/>
        </Col>
        <Col sm="2">
        <Input type='checkbox' checked={number2.checked} onChange={(e) => setNumber2({ ...number2, checked: !number2.checked })} />
        </Col>
        </Row>
        </FormGroup>
        <FormGroup className="form-group">
        <Row>
        <Col sm="10">
        <Input type='number'className="input-form btn-block" onChange={(e) => setNumber3({ ...number3, value: e.target.value })} value={number3.value} placeholder="Input the value" />
        </Col>
        <Col sm="2">
        <Input type='checkbox' checked={number3.checked} onChange={(e) => setNumber3({ ...number3, checked: !number3.checked })} />
        </Col>
        </Row>
        </FormGroup>
        
        <div>
          <Row>
          <Col sm="3">
          <Button className="btn btn-primary btn-block"  onClick={calculate.bind(this, 'tambah')}>+</Button>
          </Col>
          <Col sm="3">
          <Button className="btn btn-primary btn-block"  onClick={calculate.bind(this, 'kurang')}>-</Button>
          </Col>
          <Col sm="3">
          <Button className="btn btn-primary btn-block"  onClick={calculate.bind(this, 'bagi')}>/</Button>
          </Col>
          <Col sm="3">
          <Button className="btn btn-primary btn-block"  onClick={calculate.bind(this, 'kali')}>*</Button>
          </Col>
          </Row>
        </div>
        <h2>{total}</h2>
        { error && <h3>{error}</h3>}
        </Form>
        </CardBody>
        </Card>
        </Col>
      </Container>
  );  
}

export default App;