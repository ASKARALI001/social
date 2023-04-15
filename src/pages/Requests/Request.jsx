import React from 'react';
import {useCancelRequestMutation, useGetRequestsQuery} from "../../redux/reducers/requsets";
import {useDispatch, useSelector} from "react-redux";
import {Button, Image} from "@chakra-ui/react";
import {fillUser} from "../../redux/reducers/user";
import {userSelector} from "../../redux/reselect";

const Request = () => {

    const dispatch = useDispatch()
     const {user} = useSelector(userSelector)
    const [cancelRequest, obj] = useCancelRequestMutation()
    const {data = [], isLoading} = useGetRequestsQuery(obj.data ? obj.data.requests : user.requests)

    if (obj.data) {
        console.log(obj.data)
        dispatch(fillUser(obj.data))
    }


    const handleCancelRequest = async (id) => {
        await cancelRequest({senderId: user._id, recieverId:id }).unwrap()
    }

    console.log(data)

    return (
        <div className='requests'>
            <div className="container">
                {
                    data.map((item) => (
                        <div key={item._id}  className='notification__card'>
                            <div className='notification__card-left'>
                                <Image
                                    fallbackSrc='https://via.placeholder.com/100'
                                    borderRadius='full'
                                    boxSize='100px'
                                    src={`${process.env.REACT_APP_URL}${item.image}`}
                                    alt={`${item.name} ${item.surname}`}
                                />

                                <div className='notification__info'>
                                    <p className='notification__info-name'>{item.name} {item.surname} </p>
                                    <p className='notification__info-action'>хочет добавить вас в друзья</p>
                                    <p className='notification__info-city'>{item.city}</p>
                                </div>
                            </div>

                            <div>
                                <div className='notification__btns'>
                                    <Button onClick={() => handleCancelRequest(item._id)}  color='black' colorScheme='gray'>Отклонить</Button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Request;