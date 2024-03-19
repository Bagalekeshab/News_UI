import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/ROw';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


function Pages() {

    const [todoList, setTodolist] = useState([])

    const [amount,setAmount] = useState(
        {
            rate:'',
            quantity:'',
            discount:'',

        }
    )

    const ToggleChange =()=>{
        
        setTodolist([
            ...todoList,
            {
                rate: amount.rate,
                quantity: amount.quantity,
                amount: TotalAmount,
                discount: amount.discount,
                afterDiscount: AmountAfterDiscount
            }
        ]);


    }

    const handleEdit = (index) => {
        const updatedList = [...todoList];
        updatedList[index] = {
            rate: amount.rate,
            quantity: amount.quantity,
            amount: TotalAmount,
            discount: amount.discount,
            afterDiscount: AmountAfterDiscount
        };
        setTodolist(updatedList);
        console.log(updatedList)
    }

    const handleDelete = (item) => {
        const updatedList = todoList.filter((_, i) => i !== item);
        setTodolist(updatedList);
    }


    const TotalAmount = amount.rate*amount.quantity

    const AmountAfterDiscount = (amount.discount/TotalAmount)*100;
    
    
    const handleChange = (e) => {
        setAmount(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }));
    }
    


    return (
        <div>

            <Container>
                <Row xs={2} md={4} lg={6} className='py-2'>
                    <Col>
                        <div className=''>
                            <h4>Product</h4>
                            <div>
                                <select className='border-2 h-8 w-20'>
                                    <option>Select</option>
                                    <option>Portable Oxygen</option>
                                    <option>Concentrator</option>
                                    <option>CPAP</option>
                                    <option>Stelhoscope</option>



                                </select>
                            </div>



                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Unit</h4>
                            <div className='border-2 h-8 w-20'></div>

                        </div>
                    </Col>
                </Row>
                <div>
                <Row>
                <Col>
                        <div>
                            <h4>Rate</h4>
                            <div>
                                <Form.Control type='number' name='rate' value={amount.rate} onChange={handleChange}></Form.Control>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Quantity</h4>
                            <div><Form.Control type='number' name='quantity' value={amount.quantity} onChange={handleChange} ></Form.Control></div>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Amount</h4>
                            <div ><Form.Control type='number' value={TotalAmount}  ></Form.Control></div>

                        </div>
                    </Col>
                    <Col >
                        <div>
                            <h4>Discount</h4>
                            <div ><Form.Control type='number' name='discount' onChange={handleChange} ></Form.Control></div>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Amt after discount</h4>
                            <div ><Form.Control type='number' value={AmountAfterDiscount} onChange={handleChange}  ></Form.Control></div>

                        </div>
                    </Col>
                    <Col>
                    <div><Button onClick={ToggleChange} >+</Button></div>
                    
                    </Col>
                    
                </Row>

                </div>

            </Container>
            <div >
               <ul>
                {todoList.map((index,item)=>(
                    <li key={index} className='border-2 mt-5 w-fit mx-auto'>
                        <Row>
                            <Col>
                            Rate:{amount.rate}
                            </Col>
                            <Col>
                            Quantity:{amount.quantity},
                            </Col>
                            <Col>
                            Amount:{TotalAmount},
                            </Col>
                            <Col>
                            Discount:{amount.discount},
                            </Col>
                            <Col>
                            AfterDiscount:{AmountAfterDiscount}
                            </Col>
                            <Col className='flex gap-2'>
                            <div className=' w-fit h-fit bg-blue-500 '>
                                <button className='flex gap-1 justify-center'
                                onClick={()=>handleEdit(index)}>
                                <MdModeEdit/>
                                <a >Edit</a></button>

                            </div>
                            <div className=' w-fit h-fit bg-red-500 '>
                                <button className='flex gap-1 justify-center'
                                onClick={()=>handleDelete(item)}>
                                <MdDeleteForever/>
                                <a >delete</a></button>

                            </div>
                            </Col>
                        </Row>
                        
                       
    
                        


                    </li>
                ))}
               </ul>
            </div>



        </div>
    )
}

export default Pages
