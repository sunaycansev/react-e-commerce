import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import { useProductsContext } from "../../contexts/ProductsContext";

const ProductList = () => {
  const { products } = useProductsContext();

  return (
    <Container>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            className="col-md-3 col-sm-6"
          />
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
