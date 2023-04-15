import React from 'react';
import {IoMdNotifications} from 'react-icons/io'
import {AiFillSetting} from 'react-icons/ai'
import {BsPaletteFill} from 'react-icons/bs'
import {MdOutlineLanguage} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import HeaderSearch from "./HeaderSearch";
import {BiChevronsDown} from 'react-icons/bi'
import SwitchLang from "./SwitchLang/SwitchLang";
import {
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverArrow,
    PopoverContent,
    Button,
    PopoverCloseButton,
    Icon
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../../redux/reducers/user";
import {Link, useNavigate} from "react-router-dom";
import {userSelector} from "../../redux/reselect";

const Header = () => {

    const {user} = useSelector(userSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className='header__left'>
                        <h1 className='header__title'>IT-RUN web</h1>
                        <HeaderSearch/>
                    </div>
                    <div className='header__right'>
                        <Link to={'/notifications'} className='header__notif'>
                            <IoMdNotifications/>
                        </Link>
                        <Link to={'/request'} className='header__notif'>
                            <IoMdNotifications/>
                        </Link>
                        <Popover placement='top-end' isLazy>
                            <PopoverTrigger>
                                <Button className='header__user'>
                                    <Avatar  src={`${process.env.REACT_APP_URL}${user.image}`}/>
                                    <span className='header__user-icon'>
                                <BiChevronsDown/>
                            </span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent bg='black'>
                                <PopoverArrow bg='black' />
                                <PopoverCloseButton />
                            <div className='header__popover'>
                                <div className="header__popover-top" onClick={() => navigate('/myprofile')}>
                                    <Avatar name={`${user.name}${user.surname}`} className='header__popover-img' src={`${process.env.REACT_APP_URL}${user.image}`}/>
                                    <div>
                                        <h3 className='header__popover-title'>{user.name} {user.surname}</h3>
                                        <p className='header__popover-num'>{user.phone}</p>
                                    </div>

                                </div>
                                <ul className='header__popover-list'>
                                    <li className='header__popover-item'>
                                        <Icon as={AiFillSetting}/>
                                        <span className='header__popover-text'>Настройки</span>
                                    </li>
                                    <li className='header__popover-item'>
                                        <Icon as={BsPaletteFill}/>
                                        <span className='header__popover-text'>Тема</span>
                                    </li>
                                    <li className='header__popover-item'>
                                        <Icon as={MdOutlineLanguage}/>
                                        <SwitchLang/>
                                    </li>
                                    <li className='header__popover-item' onClick={() => dispatch(logOutUser())}>
                                        <Icon as={FiLogOut}/>
                                        <span className='header__popover-text'>Выйти</span>
                                    </li>
                                </ul>
                            </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;