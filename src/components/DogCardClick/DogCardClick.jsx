import { useState } from "react";

function DogCardClick ({dog}) {
    const [dogFlip, setDogFlip] = useState(true)
    const toggleDogFlip = () => {
        setDogFlip(!dogFlip)
    }
    const display = () => {
        if (dogFlip) {
            return (
                <img src={dog.url} alt={dog.title} ></img>
            )
        } else {
            return (
                    <p>
                        {dog.description}
                    </p>
            )

        }

        
    }

    return (
        <span 
            data-testid="toggle"
            onClick={toggleDogFlip}>
            {display()}
        </span>
    )

}

export default DogCardClick;