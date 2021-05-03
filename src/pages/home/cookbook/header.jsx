import React,{ Component } from 'react'

import {HeaderWrap} from "./styledCookBook"

export default class header extends Component {
   render(){
      return( 
               <div> 
                  <HeaderWrap>
                     美食大全
                  </HeaderWrap>
                  
               </div>
            )
}
}