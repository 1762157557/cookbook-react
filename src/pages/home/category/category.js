import React, { Component } from 'react'
import Header from './header'
import Classify from '../../../components/Category/Category'
import Search from '../../../components/search/Search'
import {CateWrap} from './styledCategroy'
import {Switch,Route,Redirect} from 'react-router-dom'


export default class Category extends Component {
    render() {
        return (
            <CateWrap>
                <Header/>
                <Search/>
                <Switch>
<Route path="/category" render={()=>(<Classify defaultItem="热门" type="category"/>)}></Route>
<Route path="/material" render={()=>(<Classify defaultItem="肉类" type="material"/>)}></Route>
<Redirect from="/" to="/category"></Redirect>
                </Switch>
                
            </CateWrap>
        )
    }
}
