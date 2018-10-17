import React, { Component } from 'react'
import { Container, Header, Table } from 'semantic-ui-react'
import Head from 'next/head';
const axios = require('axios');

class Progress extends Component {
    static getInitialProps = async function() {
        let res = await axios.get('http://localhost:3000/api/getPurchases')
        
        const purchases = res.data.purchases;
        
        return {
            purchases: purchases,
        }
    }
    
    constructor (props) {
        super(props);
        this.state = {
            purchases : this.props.purchases,
        }
    }

    

    render() {
        return(
            <div>
                <div>
                    <Head>
                    <title>Spending</title>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                    </Head>
                </div>
                <div>
                    <Container>
                        <Table celled>
                                <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Category</Table.HeaderCell>
                                    <Table.HeaderCell>Description</Table.HeaderCell>
                                    <Table.HeaderCell>Cost</Table.HeaderCell>
                                </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {this.state.purchases.map((purchase,i) => (
                                        <Table.Row key={i}>
                                                <Table.Cell>{purchase.category}</Table.Cell>
                                                <Table.Cell>{purchase.description}</Table.Cell>
                                                <Table.Cell>{purchase.amount}</Table.Cell>
                                        </Table.Row>
                                    )
                                        
                                    )}
                                </Table.Body>   
                            </Table>
                    </Container>
                </div>
            </div>
        )
        
    }
        
}
  
  export default Progress