// eslint-disable-next-line
import React, { Component } from 'react';
import '../../../../css/views/lately/lately_product.css';
import '../../../../css/views/lately/item_lately.css';
import ItemCheck from './ItemCheck';
import ItemDefault from '../../../containers/lately/Items/ItemDefault';

// const ItemsTemplate = () => {
// 요러면 props도 못읽고, this=undefind why?
const ItemsTemplate = ({data, id1, content}) => {

	let i = 0;
	
	let lists2 = [];
	while(i<content.length){
			if (content[i].type === 'check') {
					lists2.push(
							<ItemCheck key={content[i].id} ico={content[i].ico}/>
					);
			}
			else if (content[i].type === 'default') {
					lists2.push(
							<ItemDefault 
									key = {content[i].id} 
									id1  = {id1} 
									id2 = {content[i].id}
							/>
					);
			}
			i++;
	}
	return (
	<div className="item_lately">
			<span className="cont_date2">{data.date}</span>
			<ul className="list_chu_prod">
					{lists2}
			</ul>
	</div>
	);
}


export default ItemsTemplate;