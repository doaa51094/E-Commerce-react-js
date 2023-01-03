
import React,{useContext} from 'react'
import { CounterContext } from '../../Context/CounterContext';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
export const Navbar = () => {
  const {cartQuentity,count}=useContext(CounterContext);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <>
    <nav className="navbar shadow">
  <div className="container-fluid ">
  <div><img src={logo} className='w-100 ' alt="" /> </div>
   <div className='d-flex align-items-center'>
   <Link to=''className='nav-item fs-5'><div >Our Products</div></Link>
   <div className='position-relative mx-2'>
     <input type="text" className='rounded '/><i className="nav-icon fa-solid fa-magnifying-glass "></i></div>
     <div>
      {/* favorite icon */}
     <IconButton aria-label="cart">
      <StyledBadge badgeContent={count} color="secondary">
        <FavoriteIcon/>
      </StyledBadge>
    </IconButton>
    {/* shopping cart icon */}
    <Link to='/bag'> 
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartQuentity} color="secondary">
        <ShoppingCartIcon/>
      </StyledBadge>
    </IconButton>
    </Link>
    
     </div>
    

   </div>
   
  </div>
</nav>
    
    
    </>
  )
}
