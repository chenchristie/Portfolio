import React, { FC } from 'react';
import { NavBar } from '../components/pageComponents/NavBar';
import { PageContainer } from '../components/pageComponents/PageContainer';
import { Picture } from '../components/Picture';
import { HeaderComponent } from '../components/Text/HeaderComponent';
import { colors, functionalColors, styles } from '../general/Constants';
import { FilterProps, FlexContainerProps, FlexObjectProps, GeneralProps, MouseEvent, PictureProps } from '../general/Interfaces';
import { Copy, Header3, Header4, Space } from '../components/styled';
import { ColumnContainer } from '../components/pageComponents/ColumnContainer';
import { workFilters } from '../data/work';


export const Filter: FC<FilterProps>  = ({
    filter,
    setFilter
}) => {
    let listStyle = {
        listStyle:"none",
        paddingLeft: "10px",
    }
    let innerListStyle = {
        listStyle:"none",
        paddingLeft: "20px",
    }
   
    let innerListItemStyle = {
        margin: "5px 0",
    }
   
    let addFilterValue = (value: string) => {
        if(filter.value.includes(value)){
            filter.value = filter.value.filter((el)=> el !== value);
        }
        else {
            filter.value.push(value);
        }
        setFilter({...filter})
    }
    return (
    <ul style={listStyle}>
        {
            workFilters.map((el) => {
                return (
                    <li 
                        key={el[0]}
                        onClick={(e)=>addFilterValue(e.currentTarget.innerText)}
                    > 
                        <Header3 
                            className = "hoverable"
                            color={colors.green2}
                            hoverColor={colors.green3}
                        > {el[0]} </Header3>  
                        {
                            el.length === 1 ?
                            <></> :
                            <ul style={innerListStyle}>
                                {
                                    el.map((subList, index) => {
                                        if(index === 0){
                                            return;
                                        }
                                        return (
                                            <li 
                                                style={innerListItemStyle}
                                                key={subList}
                                                onClick={(e)=>addFilterValue(e.currentTarget.innerText)}
                                             > 
                                                <Copy 
                                                    className='hoverable'
                                                    color={colors.green2}
                                                    hoverColor={colors.green3}
                                                    textTransform = {"capitalize"}
                                                > {subList} </Copy>  
                                            </li>
                                        );
                                    })
                                }            
                            </ul>               
                        }
                        
                    </li>
                );
            })
        }
    </ul>
    );
}

