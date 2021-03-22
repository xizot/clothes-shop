import ProductItem from "../ProducItem/ProductItem";
import { List } from "./ProductList.elements";

function ProductList({ data, gutter = 10, lg, md, sm, xs, bt }) {
    return (
        <List gutter={gutter} lg={lg} md={md} sm={sm} xs={xs} bt={bt}>
            {data && data.length ? (
                data.map((item, index) => (
                    <ProductItem
                        key={index}
                        name={item.name}
                        id={item.id}
                        imgSrc={item.img}
                        price={item.price.basis}
                        isSale={item.price.isSale}
                        salePrice={item.price.sale}
                    />
                ))
            ) : (
                <></>
            )}
        </List>
    );
}
export default ProductList;
