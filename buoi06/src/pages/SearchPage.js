import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { useLocation } from "react-router-dom";

function SearchPage() {
	const search = useLocation().search;
	const queryStr = new URLSearchParams(search).get('q');
	return (<>
		<MainTitle type="search">4 Results found for "{queryStr}"</MainTitle>
		<div className="tcl-row tcl-jc-center">
			<div className="tcl-col-12 tcl-col-md-8">
				<ArticleItem isStyleCard={true} isShowCategoies={true} isShowAvatar={false} />
			</div>
		</div>
	</>
	);
}
export default SearchPage;