import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle';
import Button from "../shared/Button";

function ArticleGeneral() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnProps={{
          as: 'a',
          type: 'default',
          href: '/'
        }} btnLabel="View More" className="btn btn-default">News List</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem type={1} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem type={1} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem type={1} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem type={1} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem type={1} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem type={1} />
          </div>
        </div>
        {/* End Row News List */}
        <Button />
      </div>
    </div>
  );
}

export default ArticleGeneral;