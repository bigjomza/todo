import React, { Component } from "react";

class FormSumit extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

render() {
   return (
     <div style={{ margin: 2 }}>
     <form onSubmit={this.props.onSubmitMessage} style={{ display: "flex" }}>
         <input type="text" style={{ flex: 9, height: 30 }} 
         onChange = {this.props.onChangMessage}/>
         <button type="submit" style={{ height: 35, flex: 1 }}>
           <strong>บันทึก</strong>
         </button>
       </form>
     </div>
   );
 }
}

export default FormSumit;