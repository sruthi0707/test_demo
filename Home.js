import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  componentDidMount()
  {
      fetch('http://localhost:4000/posts',{method:'GET'})
      .then(result=>{return result.json()})
      .then(res=>{
        console.log(res)
        this.setState({data:res})
      })
  }
  render() {
    const{data}=this.state
    return (
      <div>
        <div className='container mt-3'>
          <h1>User Details</h1>
        </div>
        <table className='container mt-5 table table-bordered table-responsive table-hover'>
          <thead>
            <tr className='table-success'>
              <th>Id</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((x,i)=>
              <tr key={i}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.mobile}</td>
                <td>{x.email}</td>
                <td>
                  <a href={"/Edit/"+x.id} className='btn btn-warning'>Edit</a>
                  &nbsp;
                  <a href={"/Delete/"+x.id} className='btn btn-danger'>Delete</a>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home