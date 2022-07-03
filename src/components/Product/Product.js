import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';

const Product = ({ product, showCategory, hover, changeCategory }) => {

    return (
        <div className={styles.product}>
            <div className={styles.product__changes}>
                {
                    showCategory && (
                        <p
                            className={styles.product__category}
                            onClick={() => changeCategory(product.category)}
                        >{product.category}</p>
                    )
                }
            </div>

            <Link to={`/product/${product.id}`} className={cn(styles.product__wrap, { [styles.product__hover]: hover })}>
                <div className={styles.product__image_wrap}>
                    <img
                        className={styles.product__image}
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <div className={styles.product__info}>
                    <h3 className={styles.product__title}>{product.title}</h3>
                    <p className={styles.product__price}><strong>Price: </strong>{product.price}</p>
                </div>
            </Link>
        </div>
    );
}

export default Product;
