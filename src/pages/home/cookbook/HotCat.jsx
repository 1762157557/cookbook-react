/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

import { Grid } from 'antd-mobile'
import { HotCatWrap } from './styledCookBook'
import header from './header';
import { get } from '../../../utils/http'





export default class a extends Component {
    state = {
        hotList: []
    }

    async componentDidMount() {
        let result = await get(
            {
                url: "/api/hotcate"
            }
        )

            
        let data = result.map((value) => ({
            key: value.id,
            title: value.title,
            icon: value.img
        })
        )

        this.setState({
            hotList: data
        })



    }

    _renderItem = dataItem => (
        <div className="item">
            {
                dataItem.icon && <img src={dataItem.icon} />
            }
            <span>{dataItem.title}</span>
        </div>
    )

    render() {
        return (
            <HotCatWrap>
                <div>
                    <header>热门分类</header>
                    <Grid data={this.state.hotList}
                        columnNum={3}
                        hasLine={false}
                        renderItem={this._renderItem}
                    />
                </div>
            </HotCatWrap>
        )
    }
}