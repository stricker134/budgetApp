import React, { Component } from 'react'
import { Container, Header, Button, Form } from 'semantic-ui-react'
import Head from 'next/head';
const axios = require('axios');

class New extends Component {
    static getInitialProps = async function() {
        let res = await axios.get('http://localhost:3000/api/test')
        const data = await res.data.test;
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return { testString: data,
                 firstDay: firstDay        
        }
    }
    
    constructor (props) {
        super(props);
        this.state = {
            allocations: {
                id:this.props.testString.uId,
                catId:this.props.testString..map((cat) => cat.catId),
                amount: this.props.testString.map((cat) => ""),
                headings: this.props.testString.map((cat) => cat.Name),
                month: this.props.firstDay}
            }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }


     handleSubmit(event) {
        axios.post('/api/addCategory',{
                allocations: this.state.allocations
              })
              .then(function (response) {
                console.log('submitted');
              })
              .catch(function (error) {
                console.log(error);
              });
    }
      
    


    render() {
        return(
            <div>
                <Head>
                <title>New Budget</title>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                </Head>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                    {this.state.values.map((el, i) => (   
                        <Form.Field key={i} style={{marginTop:"10px"}}>
                            <label>{this.state.headings[i]}</label>
                            <input type="number" value={el||''} onChange={this.handleChange.bind(this,i)}/>
                        </Form.Field>
                    ))}

                    <input type="submit" value="Submit" />
                    </Form>
                </Container>
            </div>
        )
        
    }
        
}
  
  export default New