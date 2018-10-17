import React, { Component } from 'react'
import { Container, Header, Button, Form, Dropdown } from 'semantic-ui-react'
import Head from 'next/head';
const axios = require('axios');

class Log extends Component {
    static getInitialProps = async function() {
        let res = await axios.get('http://localhost:3000/api/getCats')
        
        const categories = res.data.cats.map((cat) => cat.Name);
        const ids = res.data.cats.map((cat) => cat.id);
        const months = res.data.cats.map((cat) => cat.month);
        return {
            cats: categories,
            ids: ids,
            months: months
        }
    }
    
    constructor (props) {
        super(props);
        this.state = {
            cats : this.props.cats,
            ids: this.props.ids,
            selectedCatName: '',
            selectedCatValue: '',
            description:'',
            cost: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let cost = this.state.cost;
        cost = event.target.value;
        this.setState({ cost });
    }

    changeDescription(event) {
        let description = this.state.description;
        description = event.target.value;
        this.setState({ description });
    }

    listChange(e, { value }) {
        let selectedCatValue = value;
        this.setState({ selectedCatValue });
    }


     handleSubmit(event) {
       console.log('cat:' + this.state.selectedCatValue);
       console.log('cost:' + this.state.cost);
       axios.post('/api/addPurchase',{
        purchase: {uId: 1,
        CatId: this.state.selectedCatValue,
        description:this.state.description,
        amount: this.state.cost}
      })
      .then(function (response) {
        console.log('submitted');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
      
    


    render() {
        var listoptions = this.state.cats.map((cat, i) => ({text: cat, value: this.state.ids[i]}))
        return(
            <div>
                <Head>
                <title>Log Item</title>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                </Head>
                <Container>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Field style={{marginTop:"10px"}}>
                                <Dropdown placeholder='Category' fluid selection options={listoptions} value={this.state.selectedCatValue} onChange={this.listChange.bind(this)} />
                        </Form.Field>

                        <Form.Field style={{marginTop:"10px"}}>
                            <label>Description</label>
                            <input type="text" value={this.state.description} onChange={this.changeDescription.bind(this)}/>
                        </Form.Field>
                      
                        <Form.Field style={{marginTop:"10px"}}>
                            <label>Cost</label>
                            <input type="number" value={this.state.cost} onChange={this.handleChange.bind(this)}/>
                        </Form.Field>

                    <input type="submit" value="Submit" />
                    </Form>
                </Container>
            </div>
        )
        
    }
        
}
  
  export default Log