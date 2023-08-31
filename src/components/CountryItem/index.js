import './index.css'

const CountryItem = props => {
  const {data, onClickRemove} = props
  const {id, imageUrl, name} = data
  const removeItem = () => {
    onClickRemove(id)
  }
  console.log(data)
  return (
    <li key={id} className="country-item-container">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="country-description-container">
        <p className="country-name">{name}</p>
        <button
          id={id}
          type="button"
          className="remove-button"
          onClick={removeItem}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem
