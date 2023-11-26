import DogCardClick from "../DogCardClick/DogCardClick";
import React from "react";
import LikeButton from "../LikeButton/LikeButton";

function GalleryList({dogs, whereMyDogsAt}) {

    return (
        <>
        <div>
        Click below to learn more about this dogs happy ending.
        </div>
        <span data-testid="galleryList">
        {dogs.map(dog => (
            <div className = "card" key={dog.id} data-testid="galleryItem">
                <DogCardClick dog = {dog}/>
                <div className = "container">
                <h3>{dog.title}</h3>
                <LikeButton id = {dog.id} whereMyDogsAt = {whereMyDogsAt} />
        </div>
        </div>
        
            
            ))}
        </span>
        </>
    )
}

export default GalleryList;