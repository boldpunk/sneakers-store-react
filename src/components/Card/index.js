import React from 'react';
import styles from './Card.module.scss';
console.log(styles);

function Card( {title, imageUrl, price, onFavorite, onPlus}){
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price, onFavorite, onPlus});
        setIsAdded(!isAdded);
    };


    React.useEffect(() => {
        console.log('');
    }, [isAdded]);
    
    return(
    <div className={styles.card}>
    <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" onClick={onFavorite}/>
    </div>
        <img width="133" height="112" src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб</b>
            </div>
            
                <img   
                className={styles.plus} 
                onClick={onClickPlus} 
                src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} 
                alt="btn-plus" 
                />
           
        </div>
    </div>
    );
}

export default Card