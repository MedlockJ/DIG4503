import React from 'react';

class PageTitle extends React.Component {
    render(title){
    return <header class="App-header">
                <h1>Hello, {this.props.title}</h1>
           </header>
    }
}

export default PageTitle;