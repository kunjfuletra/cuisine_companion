import React from 'react';
import "../category/category.css"
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiIndianPalace} from 'react-icons/gi'
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Category() {
    const navigate = useNavigate();

    const handleclick = () =>{
        navigate('/cuisine/Indian');
    }
    const handleclick1 = () =>{
        navigate('/cuisine/Italian');
    }
    const handleclick2 = () =>{
        navigate('/cuisine/American');
    }
    const handleclick3 = () =>{
        navigate('/cuisine/Thai');
    }
  return (
    <div className='categorycontainer'>
        <div className="list">
            <div className="slink" onClick={handleclick}> 
            <GiIndianPalace />
                <h4>Indian</h4>
            </div>
            <div className="slink" onClick={handleclick1}>
            <FaPizzaSlice />
                <h4>Italian</h4> 
            </div>
            <div className="slink" onClick={handleclick2}>
            <FaHamburger />
                <h4>American</h4>
            </div>
            <div className="slink" onClick={handleclick3}>
            <GiNoodles />
                <h4>Thai</h4>
            </div>
        </div>
      
    </div>
  )
}

export default Category
