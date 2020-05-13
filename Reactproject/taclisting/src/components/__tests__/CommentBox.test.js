import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';


let wrapped;

beforeEach(()=>{
    wrapped = mount (<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
 });

// Test case to confirm text area and button 
it ('has a text area and button', () => {
    //console.log(wrapped.find('textarea'));
    //console.log(wrapped.find('button'));
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe ('the text area',() => {

    beforeEach(()=>{
        wrapped.find('textarea').simulate ('change',{
            //Force the target value to set 'new comment'
            target: {value: 'new comment' }
        });
        wrapped.update();
    });
    
    // Validate text area when user types in
    it ('has a text area that user can type in',() => {
        expect (wrapped.find('textarea').prop('value')).toEqual ('new comment');
    });

    // Text area gets emptied
    it ('when form is submitted, text area gets emptied',() => {
        //expect (wrapped.find('textarea').prop('value')).toEqual ('new comment');
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect (wrapped.find('textarea').prop('value')).toEqual ('');
    });

});

