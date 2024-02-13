// External modules
import Link from 'next/link';
import Image from 'next/image';

// Internal modules
import logoImg from '@/assets/logo.png';
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
							<Link href='/meals'>Browse Meals</Link>
						</li>
						<li>
							<Link href='/community'>Foodie Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
export default MainHeader;
