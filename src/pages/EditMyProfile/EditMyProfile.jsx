import React  from 'react';
import {SlPencil} from "react-icons/sl";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/reselect";
import {useTranslation} from "react-i18next";
import {months, years,  dyse} from "../../utils/birthday";


const EditMyProfile = () => {
    const {user} = useSelector(userSelector)
    const {ti, i18n} = useTranslation()



    return (
        <div className='editMyProfile'>
            <div className="container">
                <div className="profile__info">
                    <div className="profile__info-top">
                        <button className="profile__info-cover">
                            <SlPencil/>
                            Change cover
                        </button>
                    </div>
                    <div className="profile__info-bottom">
                        <div className="profile__info-avatar">
                            <img src={`${process.env.REACT_APP_URL}${user.image}`} alt="" className="profile__info-image"/>
                        </div>
                        <div className="profile__info-user">
                            <h3 className="profile__info-name">
                                Ivan Ivanov
                            </h3>
                        </div>

                    </div>



                </div>
                <div className="editMyProfile__content">
                    <div className="editMyProfile__card">
                        <label className='editMyProfile__label' htmlFor='info'>
                            Краткая информация
                        </label>
                        <textarea className='editMyProfile__filed' id='info'/>

                    </div>
                    <div className="editMyProfile__card">
                        <label className='editMyProfile__label' htmlFor='family'>
                            Семейное положение
                        </label>
                        <select className='editMyProfile__filed' id='family'>
                            <option value="">не выброна</option>
                            <option value="single">не женат</option>
                            <option value="married">Женат</option>
                            <option value="in love">Влюблон</option>
                        </select>
                    </div>
                    <div className="editMyProfile__card">
                        <label className='editMyProfile__label' htmlFor='info'>
                            День рождения
                        </label>
                        <select className='editMyProfile__filed' id='info'>
                            {
                                dyse.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </select>
                        <select className='editMyProfile__filed '>
                            {
                                months.map((item) => (
                                    <option key={item.en} value={item.en}>{i18n.language === 'ru' ? item.ru : item.en}</option>
                                ))
                            }
                        </select>
                        <select className='editMyProfile__filed '>
                            {
                                years(2009).map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="editMyProfile__card">
                        <label className='editMyProfile__label' htmlFor='info'>

                        </label>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EditMyProfile;