import styled from "styled-components"

const border=({Comp,width="1px",style="solid",color="#ccc",radius="10px"})=>{

    const BoderComp=styled(Comp)`
    border-style:${style};
    border-width:${width};
    border-color:${color};
    border-radius:${radius};
    `
    return BoderComp;
}


export default border
