// import React, { Component } from 'react'

// export default class CChild extends Component {
//     render() {
//         return (
//         <div>
//             <h4>子组件</h4>
//             <p>{this.props.msg}</p>
//         </div>
//         )
//     }
// }



function CChild(props){
    console.log(props);
    // props.msg = '子组件修改了父组件的值'

    return(
        <div>
            <h4>子组件</h4>
            <p>{props.msg}</p>
        </div>
    )
}

export default CChild