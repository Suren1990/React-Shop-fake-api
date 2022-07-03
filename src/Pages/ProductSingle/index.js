import styles from './ProductSingle.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductById, getProductItem, getProductItemStatus } from '../../features/getProductItem/getProductItemSlice';
import Product from '../../components/Product/Product';
import { removeProduct } from '../../features/getProductsByCategory/getProductsByCategorySlice';
import Loader from '../../components/Loader/Loader';


const ProductSingle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const product = useSelector(getProductItem);
    const status = useSelector(getProductItemStatus);

    const deleteProductById = (id) => {
        dispatch(removeProduct(id));
        navigate('/products');
    }

    useEffect(() => {
        if (!status || status === 'loading') {
            dispatch(getProductById(id));
        }
    }, [dispatch, id, status])

    return (
        <div className={`${styles.productsingle} container`}>
            <div className={styles.productsingle__nav}>
                <span
                    className={styles.productsingle__back}
                    onClick={() => navigate(-1)}
                >Go back</span>

                <span className={styles.productsingle__buttons}>
                    <button className={styles.productsingle__edit}>Edit</button>
                    <button
                        className={styles.productsingle__delete}
                        onClick={() => deleteProductById(product.id)}
                    >Delete</button>
                </span>
            </div>
            {
                status === 'loading' && <Loader />
            }
            {
                status === 'loaded' && product && (
                    <Product product={product} />
                )
            }
        </div>
    );
}

export default ProductSingle;
