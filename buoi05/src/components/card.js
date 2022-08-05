function Card({ url_image, post_content }) {
  const imgDefault = 'https://seoulspa.vn/wp-content/uploads/2020/12/logo-spa-1.png';
  function handlerOnErr(e){
    e.target.src = imgDefault;
  }
  return (
    <div className="box-card">
      <div className="card">
        <img onError={handlerOnErr} src={url_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{post_content}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Card