// react
import { Link } from 'react-router-dom'
// constants
import {
	getHomeRoute,
	getAboutRoute,
	getProfileRoute,
} from '@/shared/libs/constants/routes'
// ui
import { Button } from '@/shared/ui/Button'
// styles
import styles from './Header.module.scss'

export const Header = ({}) => {
	return (
		<div className={styles.Header}>
			<Link to={getHomeRoute()}>
				<Button>Home</Button>
			</Link>
			<Link to={getProfileRoute()}>
				<Button>Profile</Button>
			</Link>
			<Link to={getAboutRoute()}>
				<Button>About us</Button>
			</Link>
		</div>
	)
}
