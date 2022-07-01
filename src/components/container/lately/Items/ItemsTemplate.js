// eslint-disable-next-line
import React, { Component } from 'react';
import '../../../../css/container/lately/lately_product.css';
import '../../../../css/container/lately/item_lately.css';
import ItemCheck from './ItemCheck';
import ItemDefault from './ItemDefault';

// const ItemsTemplate = () => {
// 요러면 props도 못읽고, this=undefind why?
const ItemsTemplate = ({data, idx, key2}) => {
		const data2 = data.content;
		let i = 0;
	
		let lists2 = [];
		while(i<data2.length){
			if (data2[i].type === 'check') {
				lists2.push(
					<ItemCheck key={key2[i].id} ico={data2[i].ico}/>
				);
			}
			else if (data2[i].type === 'default') {
				lists2.push(
					<ItemDefault 
						key = {key2[i].id} 
						id  = {idx} 
						id2 = {key2[i].id}
						deleteItem = {function(a, b){
							// this.props.deleteItem2(a, b);
							console.log(a, b);
						}}
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
};

export default ItemsTemplate;