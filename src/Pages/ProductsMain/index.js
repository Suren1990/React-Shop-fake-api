import styles from './ProductsMain.module.scss';
import GetCategories from '../../features/getCategories/GetCategories';

const ProductsMain = () => {
    return ( 
        <div className={`${styles.productsmain} container`}>
            <GetCategories />
        </div>    
    );
}
 
export default ProductsMain;
