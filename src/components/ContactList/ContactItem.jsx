// import React from 'react'
import s from "./ContactList.module.css"
import { useDispatch, useSelector } from 'react-redux'
// import { addToFavorite } from '../../redux/Contacts/action'
import { MdDeleteOutline } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
// import { addToFavorite } from '../../redux/Contacts/slice';
import { selectUser } from '../../redux/userSlice';
import { removeContactThunk } from '../../redux/Contacts/operations';


export const ContactItem = ({ id, name, phone, favorite, author, handleEditItem, addToFavarite }) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    return (
        <li key={id} className={s.listItem}>  <div className={s.contactInfo}>
            <span className={s.contactName}> {name} </span> : {phone}
            <span className={s.author} >by {author} </span> </div>
            <button onClick={addToFavarite} type="button" className={s.deleteButton}>
                {favorite ? <BiSolidLike size={18}/> : <BiLike size={18} /> }
            </button>

           {user === author && <button onClick={handleEditItem} type="button" className={s.deleteButton}>
                <MdOutlineEdit size={18} />
            </button>}

            {user === author && <button onClick={() => dispatch(removeContactThunk(id))} type="button" className={s.deleteButton}>
                <MdDeleteOutline size={18} />
            </button>}
        </li>
    )
}
