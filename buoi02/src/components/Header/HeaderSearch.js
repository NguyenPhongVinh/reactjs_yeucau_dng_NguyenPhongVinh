import Input from "../shared/Input";
function HeaderSearch() {
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form action="/search.html" method="get">
        <div className="header-search">
          <Input className="header-search__input" aria-label="Search" name="query" placeholder="Search articles here ..." />
        </div>
      </form>
    </div>
  );
}

export default HeaderSearch;