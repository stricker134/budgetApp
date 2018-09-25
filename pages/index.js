import React from 'react'
import Link from 'next/link'
import { Container, Header, Button } from 'semantic-ui-react'
import Head from 'next/head';


export default () => (
  <div>
        <Head>
          <title>Hme</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        </Head>
        <Container text style={{textAlign:'center', marginTop:'15%'}}>
        <Header as='h2'>Start Here:</Header>
        <Link href='/new'><a><Button content='New Budget' style={{width:'100%', marginBottom:'20px'}} /></a></Link>
        <Link href='/progress'><a><Button content='Track Progress' style={{width:'100%', marginBottom:'20px'}}/></a></Link>
        <Link href='/log'><a><Button content='Log Expense' style={{width:'100%', marginBottom:'20px'}}/></a></Link>
        <Link href='/income'><a><Button content='Log Income' style={{width:'100%'}} /></a></Link>
        
    </Container>
    </div>
)
