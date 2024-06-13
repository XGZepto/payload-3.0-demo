/** @format */

import React from 'react';
import { Button } from '@/app/(app)/tailor/_components/Button';
import classes from './index.module.scss';
import { Order } from 'payload-types';
import { getRecord } from '@/app/(app)/tailor/_utilities/getRecord';

export interface HighlightCardProps {
	order: Order;
}

export const HighlightCard: React.FC<HighlightCardProps> = async ({
	order,
}) => {
	const { data: productImg } =
		typeof order.item.productImage === 'string'
			? await getRecord({ slug: 'media', id: order.item.productImage })
			: { data: order.item.productImage };
	const { data: category } =
		typeof order.item.productCategory === 'string'
			? await getRecord({
					slug: 'itemCategories',
					id: order.item.productCategory,
			  })
			: { data: order.item.productCategory };

	return (
		<div className={classes.highlightCard}>
			<div className={classes.imgWrapper}>
				<img
					src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL}${productImg.url}`}
					alt={productImg.filename}
				/>
			</div>
			<div className={classes.content}>
				<div className={classes.text}>
					<div className={classes.title}>{order.item.productName}</div>
					<div className={classes.category}>{category.name}</div>
				</div>
				<Button
					href={`/dashboard/orders/${order.id}`}
					label={'See more'}
					appearance='primary'
					className={classes.btn}
				/>
			</div>
		</div>
	);
};
