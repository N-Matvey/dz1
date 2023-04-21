import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {API} from '../../api';

export default function DeletePage() {
    const {id} = useParams()
    const goBack = useNavigate()

    const del = () => {
         API.delete(`posts/${id}`)
            .then(console.log("пост был удален"))
            .then(goBack("/posts"))

    }



   return(
       <div>
            <p>Вы действительно хотите удалить?</p>
            <button onClick={() => goBack(-1)}>нет</button>
            <button onClick={del}>да</button>
       </div>
   )
}