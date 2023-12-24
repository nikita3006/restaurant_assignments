import classes from './Header.module.css'
import background2 from '../../Assets/background2.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header=(props)=>{
   return(
    <>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={background2} alt="Lets go" />
      </div>
    </>
   )
}

export default Header;