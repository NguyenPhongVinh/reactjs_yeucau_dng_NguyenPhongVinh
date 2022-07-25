import Button from "../shared/Button";

function Category() {
  return (
    <ul className="article-item__categories">
      <li><Button href="/" as="a" type="category">News</Button></li>
      <li><Button href="/" as="a" type="category">News</Button></li>
    </ul>
  )
}
export default Category;