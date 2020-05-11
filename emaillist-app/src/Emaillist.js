import React from 'react';
import EmaillistItem from './EmaillistItem';

export default class Emaillist extends React.Component {
    componentWillReceiveProps(){
        console.log('Emaillist.componentWillReceiveProps()');
    }
    shoudComponentUpdate(){
        console.log('Emaillist.shoudComponentUpdate()');
    }
    componentWillUpdate(){
        console.log('Emaillist.componentWillUpdate()');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        // this.props.keyword : New
        // prevProps.keyword : Old
        console.log('Emaillist.getSnapshotBeforeUpdate(prevProps, prevState)' + this.props.keyword + ":" + prevProps.keyword);
        return 'test-snapshot';
    }
    render() {
        // let emaillist =[];
        // this.props.emails.forEach((element) =>
        //     emaillist.push(<EmaillistItem
        //             name = { `${element.firstName}${element.lastName}` }
        //             email = { element.email }
                
        //         />)
        // );
        return (
            <div className='Emaillist'>
                <ul>
                    { this.props.emails && this.props.emails
                        .filter((element) => element.firstName.indexOf(this.props.keyword) != -1 || element.lastName.indexOf(this.props.keyword) != -1 || element.email.indexOf(this.props.keyword) != -1)
                        .map((element) => <EmaillistItem
                                name = { `${element.firstName}${element.lastName}` }
                                email = { element.email }
                                key = { element.no }
                            />) }
                </ul>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Emaillist.componentDidUpdate(prevProps, prevState, snapshot)-' + snapshot);
    }
}