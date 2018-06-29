import React from 'react';
import {connect} from 'react-redux';
import {addInputItem} from '../actions/index.js';

const addInputButtonClasses = 'button button--add-input';

const mapDispatchToProps = dispatch => {
    return {
        addInputItem: () => dispatch(addInputItem())
    };
};

const submitAllForms = () => {
    [...document.querySelectorAll('button[type="submit"]')].forEach(buttonEl => buttonEl.click());
}

const Header = ({addInputItem}) => (
    <header className="header">
        <div className="wrapper">
            <h1 className="logo">Input Type Sandbox</h1>
            <div className="header__buttons">
                <button className="button" onClick={submitAllForms}>Test All Inputs</button>
                <button className="button">Save</button>
                <button className={addInputButtonClasses} onClick={addInputItem} title="Add an Input">+</button>
            </div>
        </div>
    </header>
);

export default connect(null, mapDispatchToProps)(Header);