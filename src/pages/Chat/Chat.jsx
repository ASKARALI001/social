import React, {useState} from 'react';
import {Avatar, Input} from "@chakra-ui/react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [selectEmoji, setSelectEmoji] = useState(false)

    return (
        <section className='chat'>
            <div className="container">
                <div className="chat__content">
                    <div className='chat__sidebar'>
                        <div className="chat__search">
                            <input type="text"/>
                        </div>
                        <div className="chat__friends">
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                        </div>
                        <div className="chat__list">
                            <div className="header__popover-top" >
                                <Avatar className='header__popover-img' src='sdfa'/>
                                <div>
                                    <h3 className='header__popover-title'>Tony stark</h3>
                                    <p className='header__popover-num'>asdfasdf</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="chat__block">
                        <div className='chat__block-top'>
                            <h2>Tony stark</h2>
                            <Avatar/>
                        </div>
                        <div className='chat__block-bottom'>
                            <Input className='chat__block-field'  placeHolder='A hmed chert'/>
                            {
                                selectEmoji ? <div className='profile__emoji-block' onMouseLeave={() => setSelectEmoji(false)} >
                                        <EmojiPicker/>

                                    </div>:
                                    <span onClick={() => setSelectEmoji(true)} className="chat__block-emoji profile__addPost-emoji" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.44 14.3a.9.9 0 0 1 1.26.13c.01.02.2.22.53.43.38.24.97.49 1.77.49a3.3 3.3 0 0 0 1.77-.49c.2-.12.39-.26.53-.43a.9.9 0 0 1 1.4 1.13 4.04 4.04 0 0 1-.97.83 5.1 5.1 0 0 1-2.73.76 5.1 5.1 0 0 1-2.73-.76 3.99 3.99 0 0 1-.97-.83.9.9 0 0 1 .14-1.26Zm1.81-4.05a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5Zm-3-9.4a9.9 9.9 0 1 0 0 19.8 9.9 9.9 0 0 0 0-19.8ZM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0Z" clipRule="evenodd"></path></svg>
                                </span>
                            }

                        </div>
                    </div>
                </div>

            </div>
            
        </section>
    );
};

export default Chat;