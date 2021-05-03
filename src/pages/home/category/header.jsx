import React, { Component } from 'react'
import {HeaderWrap}  from './styledCategroy'
import {withRouter}  from "react-router-dom"
class Header extends Component {
    state={
        dir:'category',
    }
    handleClick=dir=>{ 
        return ()=>{
            console.log(dir);
            this.setState({
                dir
            })
            this.props.history.push(`/${dir}`)
        }
        
    }
    render() {
        return (
            <HeaderWrap>
                <ul>
                    <li className={this.state.dir==="category" ? "active" : ""}  onClick={this.handleClick('category')}>分类</li>
                    <li className={this.state.dir==="material" ? "active" : ""} onClick={this.handleClick('material')} >食材</li>
                </ul>
            </HeaderWrap>
        )
    }
}

export default withRouter(Header)
