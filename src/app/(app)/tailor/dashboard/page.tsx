/** @format */

import React from 'react';
import Link from 'next/link';

import axios from 'axios';
import { Button } from '../_components/Button';
import { Card } from '../_components/Card';
import { Order, Media } from '../payload-types';
import { Gutter } from '../_components/Gutter';
import { RenderParams } from '../_components/RenderParams';
import { getMeUser } from '../_utilities/getMeUser';
import { getOrder } from '../_utilities/getOrder';
import { getRecord } from '../_utilities/getRecord';

import classes from './index.module.scss';

import { HighlightCard } from './_components/HighlightCard';
import { getAcceptedOrders } from '../_utilities/getAcceptedOrders';
import { getRecentPastOrders } from '../_utilities/getRecentPastOrders';

export default async function Dashboard() {
	await getMeUser({
		nullUserRedirect: `/login?error=${encodeURIComponent(
			'You must be logged in to access the dashboard.'
		)}&redirect=${encodeURIComponent('/dashboard')}`,
	});

	// const {order: highlightOrder} = await getOrder({orderID: "656bf6dba935a63bcd19eece"})
	const { data: highlightOrder } = await getRecord({
		slug: 'orders',
		id: '656bf6dba935a63bcd19eece',
	});
	const { orders: acceptedOrders } = await getAcceptedOrders({});
	const { orders: recentPastOrders } = await getRecentPastOrders({});

	return (
		<Gutter className={classes.dashboard}>
			<RenderParams className={classes.params} />

			<div className={classes.highlight}>
				<h5>Available Orders</h5>
				<HighlightCard order={highlightOrder} />
				<Card
					label={`See all available orders (6)`}
					icon='ArrowRight'
					appearance='default'
				/>
			</div>

			<div className={classes.section}>
				<h5>Accepted</h5>
				{acceptedOrders.map((order: Order) => (
					<Card
						key={order.id}
						label={order.item.productName}
						secondaryLabel={order.createdAt}
						icon='Check'
						href={`/dashboard/orders/${order.id}`}
						appearance='accepted'
					/>
				))}
			</div>

			<div className={classes.section}>
				<h5>Recent Past Orders</h5>
				{recentPastOrders.map((order: Order) => (
					<Card
						key={order.id}
						label={order.item.productName}
						secondaryLabel={order.createdAt}
						icon='ClockCountdown'
						href={`/dashboard/orders/${order.id}`}
						appearance='past'
					/>
				))}
			</div>
		</Gutter>
	);
}
