import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import { selectIsCartOpen } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import { signOutStart } from "../../store/user/user-action";

import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from './navigation-styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => {
    dispatch(signOutStart());
  }
 
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink className="nav-link" to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinksContainer>
        { 
          isCartOpen &&
          <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;