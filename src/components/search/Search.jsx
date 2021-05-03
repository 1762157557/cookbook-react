import React, { Component } from 'react'
import searchImg from "assets/search.png"
import {SearchWrap} from "./styledSearch"

export default class Search extends Component {
   render() {
      return (
         <SearchWrap>

            <div>
                  <img src={searchImg} />
                  <span>想吃什么搜索这里，如川菜</span>
               
            </div>

         </SearchWrap>

      )
   }
}
