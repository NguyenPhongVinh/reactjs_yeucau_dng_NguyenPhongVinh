function buttonViewMore(props) {
  function handleClickViewMore(type) {
    window.event.preventDefault();
    alert(type);
  }

  return (
    <a href="/" onClick={() => handleClickViewMore(props.type)} className="btn btn-default">View More</a>
  )
}
export default buttonViewMore;