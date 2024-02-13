// External modules
import Link from 'next/link';
import Image from 'next/image';

// Internal modules
import logoImg from '@/assets/logo.png';
import NavLink from '../nav-link/nav-link';
import styles from './main-header.module.css';
import MainHeaderBackground from '../main-header-background/main-header-background';

const MainHeader = () => {
	return (
		<>
			<MainHeaderBackground />
			<header className={styles.header}>
				<Link className={styles.logo} href='/'>
					<Image priority src={logoImg} alt='A plate with food on it' />
					NextLevel Food
				</Link>
				<nav className={styles.nav}>
					<ul>
						<li>
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href='/community'>Foodie Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
export default MainHeader;
