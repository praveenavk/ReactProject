import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

it ('shows a text search', () => {
    const div= document.createElement('div');
  
    ReactDOM.render (<App />, div);
    //console.log(div.innerHTML);
    expect (div.innerHTML).toContain ('Search by TAC');
    ReactDOM.unmountComponentAtNode(div);

});
