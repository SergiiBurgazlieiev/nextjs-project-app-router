'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link.module.css';

const NavLink = ({ href, children }) => {
	const path = usePathname();
	return (
		<Link
			className={
				path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
			}
			href={href}>
			{children}
		</Link>
	);
};

export default NavLink;
