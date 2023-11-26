import { useState } from "react";
import axios from "axios";

function CreateDog ({whereMyDogsAt}) {
    let [newDogURL, setNewDogURL] = useState('images/goat_small.jpg');
    let [newDogTitle, setNewDogTitle] = useState('');
    let [newDogDescription, setNewDogDescription] = useState('');


    const addDog = (event) => {
            event.preventDefault()
            axios({
                method: 'POST',
                url: '/gallery',
                data: {
                    title: newDogTitle,
                    description: newDogDescription,
                    url: newDogURL
                }
            })
            .then((result) => {
                whereMyDogsAt()

            })
            .catch((error) => {
                console.error(error)
            })
    }
    
    return(
        <>
        <h3>Add a New Dog</h3>
        <div className="input-group">
            <form onSubmit={addDog}>
                <label>
                    Dog Name:
                    <input type="text"
                    placeholder="Dog's Name"
                    value = {newDogTitle}
                    onChange={(event) => setNewDogTitle(event.target.value)} />
                </label>
                <label>
                    Dog Description:
                    <input type="text"
                    placeholder="Description of Dog"
                    value = {newDogDescription}
                    onChange={(event) => setNewDogDescription(event.target.value)} />
                </label>
                <label>
                    Dog Name:
                    <input type="text"
                    placeholder="Dog's Picture URL"
                    value = {newDogURL}
                    onChange={(event) => setNewDogURL(event.target.value)} />
                </label>
                <button>
                    Submit
                </button>
            </form>
        </div>
        </>
    )

}

export default CreateDog;