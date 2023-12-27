import React, { Component } from 'react'

export class Delete extends Component {
  componentDidMount(){
    var id=window.location.pathname.split('/')[2]
    if(id!=null)
    {
      fetch('http://localhost:4000/posts/'+id,{
        method:'DELETE'
      }).then(res=>{
        if(res.status==200)
        {
          alert('Delete Successfully')
        }
      })
    }
  }
  render() {
    return (
      <div>Delete</div>
    )
  }
}

export default Delete