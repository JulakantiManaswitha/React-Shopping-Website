import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
            <div className='title'>
                <h2>Shopping Website</h2>
            </div>
        </div>
        <div className='center'>
            <ul>
                <li><a href='#'>Women</a></li>
                <li><a href='#'>Men</a></li>
                <li><a href='#'>Kids</a></li>
                <li><a href='#'>Beauty</a></li>
                
            </ul>
        </div>
        <div className='search'>
            <input type="text" placeholder='Search...' />
        </div>
        <div className='right'>
            <div className='signin'>
                <a href='#'>SignIn/SignUp</a>
            </div>
            <div className='cart'>
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header