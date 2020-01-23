import * as React from 'react';
interface Props{
    name:String;
}
export default class Child extends React.Component<Props,{}>{
    render(){
        return(
            <p>{this.props.name}</p>
        );
    }
}