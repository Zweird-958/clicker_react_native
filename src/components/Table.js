import { styled } from 'nativewind';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { StoreContext } from '../contexts/StoreContext';
import RowBody from "./RowBody"
import RowHeading from "./RowHeading"
const StyledView = styled(View)

const Table =  (props) => {
    const { store } = useContext(StoreContext);
    // console.log(props.body)
    return(    
        <StyledView className={`${store ? "" : "hidden"} w-3/4 border-2`}>
            <RowHeading items={props.head}></RowHeading>
            {/* <RowBody items={props.body}></RowBody> */}
            {/* {props.body.map(bodyelement) => (
                <RowBody items={element}></RowBody>
            ))} */}
            {props.body.map((element, index) => (
                <RowBody items={element} index={index}></RowBody>
            ))}
        </StyledView>
    )
}

// 

export default Table;