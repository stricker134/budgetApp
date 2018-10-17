import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Header, Button } from 'semantic-ui-react'
const axios = require('axios');
import Head from 'next/head';

class Index extends Component {
  static getInitialProps = async function() {
      //check to see if budget has already been made
  }
  
  constructor (props) {
      super(props);
      this.state = {
          }

  }


  render  () {
    return(
    <div>
          <Head>
            <title>Home</title>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
          </Head>
          <Container text style={{textAlign:'center', marginTop:'35%'}}>
            <Header as='h2'>Start Here:</Header>
            <Link href='/new'><a><Button content='New Budget' size='massive' style={{width:'100%', marginBottom:'20px', height:'200px'}} /></a></Link>
            <Link href='/progress'><a><Button content='Track Progress' size='massive' style={{width:'100%', marginBottom:'20px', height:'200px'}}/></a></Link>
            <Link href='/log'><a><Button content='Log Expense' size='massive' style={{width:'100%', marginBottom:'20px', height:'200px'}}/></a></Link>
            <Link href='/income'><a><Button content='Log Income' size='massive' style={{width:'100%', height:'200px'}} /></a></Link>
          
      </Container>
      </div>
    )
  }
}

export default Index
