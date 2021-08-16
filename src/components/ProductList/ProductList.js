import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import { useProductsContext } from "../../contexts/ProductsContext";

const ProductList = () => {
  const { products } = useProductsContext();

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
