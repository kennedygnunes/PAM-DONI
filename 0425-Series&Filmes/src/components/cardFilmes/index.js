import React from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from "./style";


export default function cardFilmes({titulo, nota, imagem}){
    return(

        <TouchableOpacity style = {styles.containerFilmes}>

            <Image style = {styles.imagemFilmes} source = {require(`../../Img/${imagem}`)}/>
            <Text style = {styles.tituloFilmes}>{titulo}</Text>
            <Text style = {styles.notaFilmes}>{nota}</Text>

        </TouchableOpacity>

    );
}