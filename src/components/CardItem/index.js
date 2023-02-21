import './index.css'

const CardComponent = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  const listItemStyle = `common-list-style ${className}`
  return (
    <li className={listItemStyle}>
      <div className="card-container">
        <h1 className="card-heading">{title}</h1>
        <p className="card-paragraph">{description}</p>
        <img className="image-style" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardComponent
