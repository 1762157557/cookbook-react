import styled from "styled-components"


export const HeaderWrap=styled.div`
    height:.44rem;
    display:flex;
    background:#ee742f;
    align-items:center;
    justify-content:center;
    ul{
        dispaly:flex;
        width:1.4rem;
        height:.3rem;
        position:relative;
        display:flex;
        border: 1px solid white;
        z-index:0;

    }
    li{
        z-index:0;
        flex:1;
        line-height:.3rem;
        text-align:center;
        color:#fff;
        &.active{
            background:#fff;
            color:#ee742f;
        }

    }
  

`

export const CateWrap=styled.div`
    height:100%;
    overflow:hidden;

`