import React, { Component } from 'react'

export class Edit extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'',mobile:'',email:'',id:''
   }
 }
 changeHandler=(event)=>{
 this.setState({
  [event.target.name]:event.target.value
 })
 }
 submitHandler=(event)=>{
  event.preventDefault()
//console.log(this.state)
fetch('http://localhost:4000/posts/'+this.state.id,{
  method:'PUT',
  headers:{'content-type':'application/json'},
  body:JSON.stringify(this.state)
  }).then(result=>{
    console.log(result)
    if(result.status==200){
      alert('Record Saved Successfully')
      this.setState({id:'',name:'',mobile:'',email:''})
    }
  })
}
componentDidMount(){
  var id=window.location.pathname.split('/')[2]
  fetch('http://localhost:4000/posts/'+id,{
    method:'GET'
  }).then(result=>{
    return result.json()
  }).then(res=>{
    if(res!=null)
    {
      this.setState({
        id:res.id,name:res.name,mobile:res.mobile,email:res.email
      })
    }
  })
}
  render() {
    const{id,name,mobile,email}=this.state
    return (
      <div>
        <div className='container'>
          <div className='alert alert-success'>
           <h1>Udate User</h1>
          </div>
         </div>
         <div className='container'>
          <form onSubmit={this.submitHandler}>
            <div className='row mt-3 d-none'>
              <input type="text" defaultValue={id} className='form-control' placeholder='Enter Id'/>

            </div>
            <div className='row mt-3'>
              <div className='col'>
                <input type='text' className='form-control'placeholder='Enter Name' value={name} onChange={this.changeHandler} name="name"/>
                </div>
                <div className='col'>
                <input type='text' className='form-control'placeholder='Enter Mobile' value={mobile} onChange={this.changeHandler} name="mobile"/>
                </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <input type='text' className='form-control'placeholder='Enter Email' value={email} onChange={this.changeHandler} name="email"/>
                </div>
               </div>
               <div className='row mt-3'>
              <div className='col'>
                <button type='submit' className='btn btn-primary'>Update User</button>
                </div>
               </div>
          </form>

         </div>
      </div>
    )
  }
}

export default Edit