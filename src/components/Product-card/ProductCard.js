import './productCard.module.css';
const ProductCard = (props) => {
    const prod=props.product;
    return (
      <div className='contaniner'>
        <div className="row">
          <div className="col-md-12">
            <div className="card h-100">
              <img src={prod.image} alt={prod.title} className="card-img-top" height={350} />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p className='card-price'>${prod.price}</p>
                  <small className="text-body-secondary">
                  <span>Rating: {prod.rating.rate}</span>
                  <span>({prod.rating.count} )</span>
                  </small>
                </div>
                <div className="card-footer">
                  <button type="button" className="btn btn-secondary">Add</button>
                  <button type="button" className="btn btn-success">Move</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
 