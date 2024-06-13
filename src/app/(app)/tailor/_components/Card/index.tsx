/** @format */

'use client';
import { ArrowRight, ClockCountdown, Check } from '@phosphor-icons/react';
import React, { ElementType } from 'react';
import Link from 'next/link';

import classes from './index.module.scss';

export type Props = {
	label?: string;
	secondaryLabel?: string;
	appearance?: 'default' | 'accepted' | 'pending' | 'past';
	icon?: 'ArrowRight' | 'ClockCountdown' | 'Check';
	href?: string;
};

export const Card: React.FC<Props> = ({
	label,
	secondaryLabel,
	appearance,
	icon,
	href,
}) => {
	const cardClasses = `${classes.card} ${
		appearance ? classes[appearance] : ''
	}`;

	const iconElement = (() => {
		switch (icon) {
			case 'ArrowRight':
				return <ArrowRight className={classes.icon} />;
			case 'ClockCountdown':
				return <ClockCountdown className={classes.icon} />;
			case 'Check':
				return <Check className={classes.icon} />;
			default:
				return null;
		}
	})();

	const cardContent = (
		<>
			<div className={classes.label}>{label}</div>
			<div className={classes.rightContent}>
				{secondaryLabel && (
					<div className={classes.secondaryLabel}>{secondaryLabel}</div>
				)}
				{iconElement}
			</div>
		</>
	);

	return href ? (
		<Link href={href} passHref>
			<div className={cardClasses}>{cardContent}</div>
		</Link>
	) : (
		<div className={cardClasses}>{cardContent}</div>
	);
};
