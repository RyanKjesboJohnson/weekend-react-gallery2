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
                <span className = "container">
                <p><b>{dog.title}</b> <LikeButton id = {dog.id} whereMyDogsAt = {whereMyDogsAt} />
                </p>
                <p>
                Number of likes: {dog.likes}

                </p>
                
        </span>
        </div>
        
            
            ))}
        </span>
        </>
    )
}

export default GalleryList;