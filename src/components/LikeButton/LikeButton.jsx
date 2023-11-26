import axios from "axios";

function LikeButton({id, whereMyDogsAt}) {
    const addLike = () => {
        axios({
         method: 'PUT',
         url: `/gallery/like/${id}`
        })
        .then((result) => {
         whereMyDogsAt()
        })
        .catch((error) => {
         console.error(error);
        })
        }

    return(
        <button data-testid="like" onClick={addLike} size="large">🤍</button>
    )

}

export default LikeButton;