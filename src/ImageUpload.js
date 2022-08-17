const React = require('react')
class ImageUpload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
      </div>
    );
  } 
}


// const ImageUpload = () => {
//         state = {
//             file:null
//     }
//     handleChange = handleChange.bind(this)
//     return ( 

//       <div>
//         <input type="file" onChange={this.handleChange}/>
//         <img src={this.state.file}/>
//       </div>



//      );
// }
 
export default ImageUpload;
