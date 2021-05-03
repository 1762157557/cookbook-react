import React, { Component } from 'react'
import { CateWrap } from './styledgory'
import { get } from '../../utils/http'


export default class Category extends Component {
    state = {
        datasource: null,
        currentItem: "",
        defaultItem:""
    }

    static getDerivedStateFromProps(props,state){
        if(props.defaultItem!==state.defaultItem){
            return {
                ...state,
                defaultItem:props.defaultItem,
                currentItem:props.defaultItem

            }
        }
        return null

    }

    async componentDidMount() {
        let result = await get({
            url: '/api/category'
        })
        console.log(result);
        this.setState({
            datasource: result.data,
            currentItem: "热门"
        })
    }


    handleClick = (v) => {
        return () => {
            this.setState({
                currentItem: v
            })
        }

    }



    render() {

        let {type}=this.props
        let data = this.state.datasource ? Object.keys(this.state.datasource[type]) : []
        let content = this.state.datasource ? this.state.datasource[type][this.state.currentItem] : []
        return (
            <CateWrap>
                <div>
                    <ul>
                        {
                            data.map(value => {
                                return (
                                    this.state.currentItem == value ?
                                        <li key={value} className="active"><span>{value}</span></li> :
                                        <li key={value} onClick={this.handleClick(value)} >{value}</li>

                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        {

                            content.map((value) => {
                                return (
                                    <li >{value}</li>
                                )
                            })
                        }

                    </ul>
                </div>
            </CateWrap>
        )
    }
}
