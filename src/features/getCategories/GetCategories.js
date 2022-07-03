import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Product from '../../components/Product/Product';
import { fetchProductsByCategory, productsByCategoryData, productsByCategoryStatus } from '../getProductsByCategory/getProductsByCategorySlice';
import styles from './Categories.module.scss';
import { fetchAllCategories, getCategories, getCategoriesStatus } from './getCategoriesSlice';

const GetCategories = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const categorySlug = 'category/';

    const [selectedCategory, setSelectedCategory] = useState('');

    const status = useSelector(getCategoriesStatus);
    const categories = useSelector(getCategories);

    const categoryProductsStatus = useSelector(productsByCategoryStatus);
    const categoryProducts = useSelector(productsByCategoryData);

    useEffect(() => {
        if (!status) {
            dispatch(fetchAllCategories());
            dispatch(fetchProductsByCategory(selectedCategory));
        }
    }, [dispatch, selectedCategory, status, location]);

    const changeCategory = (category) => {
        setSelectedCategory(category);
        if (category) {
            dispatch(fetchProductsByCategory(categorySlug + category));
        } else {
            dispatch(fetchProductsByCategory(category));
        }
    }

    return (
        <div className={styles.catgeories}>
            <h1 className={styles.catgeories__title}>Select Categories</h1>
            <div className={styles.catgeories__items_wrap}>
                {
                    !!categories.length && (
                        <>
                            <span
                                className={cn(styles.catgeories__item, { [styles.active]: !selectedCategory })}
                                onClick={() => changeCategory('')}
                            >All products</span>
                            {
                                categories.map((category, index) => (
                                    <span
                                        className={cn(styles.catgeories__item, { [styles.active]: category === selectedCategory })}
                                        key={index}
                                        onClick={() => changeCategory(category)}
                                    >{category}</span>
                                ))
                            }
                        </>
                    )
                }
            </div>
            <div className={styles.catgeories__products}>
                {
                    categoryProductsStatus === 'loading' && (
                        <Loader />
                    )
                }
                {
                    !!categoryProducts.length && (
                        categoryProducts.map(
                            (product) => {
                                return (
                                    <Product
                                        showCategory={true}
                                        hover={true}
                                        changeCategory={changeCategory}
                                        product={product}
                                        key={product.id}
                                    />
                                )
                            }
                        )
                    )
                }
            </div>
        </div>
    );
};

export default GetCategories;
