function IndexAll() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,500;0,600;0,700;1,400&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" />
      <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      <link rel="stylesheet" href="assets/libs/bootstrap4/bootstrap-tcl.css" />
      <link rel="stylesheet" href="assets/css/main.css" />
      <link rel="stylesheet" href="assets/css/header.css" />
      <link rel="stylesheet" href="assets/css/footer.css" />
      <link rel="stylesheet" href="assets/css/main-title.css" />
      <link rel="stylesheet" href="assets/css/latest-news-list.css" />
      <link rel="stylesheet" href="assets/css/article-item.css" />
      <link rel="stylesheet" href="assets/css/popular-news-list.css" />
      <link rel="stylesheet" href="assets/css/button.css" />
      <link rel="stylesheet" href="assets/css/post-detail.css" />
      <link rel="stylesheet" href="assets/css/comments.css" />
      <link rel="stylesheet" href="assets/css/post-author.css" />
      <link rel="stylesheet" href="assets/css/related-posts.css" />
      <link rel="stylesheet" href="assets/css/login.css" />
      <title>Blog NuxtJs</title>
      <div id="fb-root" />
      <div className="wrapper-content">
        {/* Component Header */}
        <header id="header">
          <div className="tcl-container">
            <div className="tcl-row tcl-no-gutters header">
              <div className="tcl-col-2">
                {/* Logo */}
                <div className="header-logo">
                  <a href="/">
                    <img src="assets/images/logo.png" alt="Go to homepage" />
                  </a>
                </div>
              </div>
              <div className="tcl-col-4">
                {/* Header Search */}
                <form action="/search.html" method="get">
                  <div className="header-search">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                      </path>
                    </svg>
                    <input className="header-search__input" type="text" placeholder="Search articles here ..." aria-label="Search" name="query" />
                  </div>
                </form>
              </div>
              <div className="tcl-col-6">
                {/* Nav */}
                <div className="header-nav">
                  <ul className="header-nav__lists">
                    <li><a href="#">Home</a></li>
                    <li>
                      <a href="#">Our Team</a>
                      <ul>
                        <li><a href="#">Our Team 1</a></li>
                        <li><a href="#">Our Team 2</a></li>
                        <li><a href="#">Our Team 3</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                      <ul>
                        <li><a href="#">Contact 1</a></li>
                        <li><a href="#">Contact 2</a></li>
                        <li>
                          <a href="#">Contact 3</a>
                          <ul>
                            <li><a href="#">Contact 11</a></li>
                            <li><a href="#">Contact 12</a></li>
                            <li><a href="#">Contact 13</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="header-nav__lists">
                    <li className="user"><a href="login.html"><i className="icons ion-person" /> Tài khoản</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Latest News */}
        <div className="latest-news section">
          <div className="tcl-container">
            {/* Main Title */}
            <div className="main-title spacing">
              <h2>Latest Articles</h2>
            </div>
            {/* End Main Title */}
            {/* Latest News List */}
            <div className="latest-news__list spacing">
              {/* Latest news card */}
              <div className="latest-news__card">
                <article className="article-item">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will
                        Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__author-image">
                        <a aria-label="John Doe" href="#">
                          <img src="assets/images/john-doe.png" alt="john-doe" />
                        </a>
                      </div>
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* End Latest news card */}
              {/* Latest news card */}
              <div className="latest-news__card">
                <article className="article-item">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will
                        Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__author-image">
                        <a aria-label="John Doe" href="#">
                          <img src="assets/images/john-doe.png" alt="john-doe" />
                        </a>
                      </div>
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* End Latest news card */}
              {/* Latest news card */}
              <div className="latest-news__card">
                <article className="article-item">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__author-image">
                        <a aria-label="John Doe" href="#">
                          <img src="assets/images/john-doe.png" alt="john-doe" />
                        </a>
                      </div>
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* End Latest news card */}
            </div>
            {/* End Latest News List */}
          </div>
        </div>
        {/* End Latest News */}
        {/* Popular News Section */}
        <div className="popular-news section bg-white-blue">
          <div className="tcl-container">
            {/* Main Title */}
            <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
              <h2>Popular Articles</h2>
              <a href="#" className="btn btn-default">View More</a>
            </div>
            {/* End Main Title */}
            <div className="popular-news__list spacing">
              <div className="popular-news__list--left">
                <div className="popular-news__list--row">
                  {/* Popular news card */}
                  <div className="popular-news__list--card">
                    <article className="article-item style-card">
                      <div className="article-item__thumbnail">
                        <a href="#">
                          <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                        </a>
                      </div>
                      <div className="article-item__content">
                        <ul className="article-item__categories">
                          <li><a href="#" className="btn btn-category">News</a></li>
                          <li><a href="#" className="btn btn-category">News</a></li>
                        </ul>
                        <ul className="article-item__stats">
                          <li>
                            <i className="icons ion-ios-eye" />
                            <span className="text">Views</span>
                          </li>
                        </ul>
                        <h2 className="article-item__title">
                          <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                        </h2>
                        <p className="article-item__desc">Markdown is a lightweight markup language with plain-text-formatting
                          syntax. Its design allows it to…</p>
                        <div className="article-item__info">
                          <div className="article-item__author-image">
                            <a aria-label="John Doe" href="#">
                              <img src="assets/images/john-doe.png" alt="john-doe" />
                            </a>
                          </div>
                          <div className="article-item__info-right">
                            <div className="article-item__author-name">
                              <a href="#"><strong>John Doe</strong></a>
                            </div>
                            <div className="article-item__datetime">
                              <div className="date">June 02, 2020</div>
                              <div className="time">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                  </path>
                                </svg>
                                1 min</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* End Popular news card */}
                  {/* Popular news card */}
                  <div className="popular-news__list--card">
                    <article className="article-item style-card">
                      <div className="article-item__thumbnail">
                        <a href="#">
                          <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                        </a>
                      </div>
                      <div className="article-item__content">
                        <ul className="article-item__stats">
                          <li>
                            <i className="icons ion-ios-eye" />
                            <span className="text">Views</span>
                          </li>
                        </ul>
                        <ul className="article-item__categories">
                          <li><a href="#" className="btn btn-category">News</a></li>
                          <li><a href="#" className="btn btn-category">News</a></li>
                        </ul>
                        <h2 className="article-item__title">
                          <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                        </h2>
                        <p className="article-item__desc">Markdown is a lightweight markup language with plain-text-formatting
                          syntax. Its design allows it to…</p>
                        <div className="article-item__info">
                          <div className="article-item__author-image">
                            <a aria-label="John Doe" href="#">
                              <img src="assets/images/john-doe.png" alt="john-doe" />
                            </a>
                          </div>
                          <div className="article-item__info-right">
                            <div className="article-item__author-name">
                              <a href="#"><strong>John Doe</strong></a>
                            </div>
                            <div className="article-item__datetime">
                              <div className="date">June 02, 2020</div>
                              <div className="time">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                  </path>
                                </svg>
                                1 min</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* End Popular news card */}
                </div>
              </div>
              <div className="popular-news__list--right">
                <div className="popular-news__list--row">
                  {/* Popular news card */}
                  <div className="popular-news__list--card">
                    <article className="article-item style-card style-row">
                      <div className="article-item__thumbnail">
                        <a href="#">
                          <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                        </a>
                      </div>
                      <div className="article-item__content">
                        <ul className="article-item__stats">
                          <li>
                            <i className="icons ion-ios-eye" />
                            <span className="text">Views</span>
                          </li>
                        </ul>
                        <ul className="article-item__categories">
                          <li><a href="#" className="btn btn-category">News</a></li>
                          <li><a href="#" className="btn btn-category">News</a></li>
                        </ul>
                        <h2 className="article-item__title">
                          <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                        </h2>
                        <p className="article-item__desc">Markdown is a lightweight markup language with plain-text-formatting
                          syntax. Its design allows it to…</p>
                        <div className="article-item__info">
                          <div className="article-item__author-image">
                            <a aria-label="John Doe" href="#">
                              <img src="assets/images/john-doe.png" alt="john-doe" />
                            </a>
                          </div>
                          <div className="article-item__info-right">
                            <div className="article-item__author-name">
                              <a href="#"><strong>John Doe</strong></a>
                            </div>
                            <div className="article-item__datetime">
                              <div className="date">June 02, 2020</div>
                              <div className="time">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                  </path>
                                </svg>
                                1 min</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* End Popular news card */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Popular News Section */}
        <div className="articles-list section">
          <div className="tcl-container">
            {/* Main Title */}
            <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
              <h2>News List</h2>
              <a href="#" className="btn btn-default">View More</a>
            </div>
            {/* End Main Title */}
            {/* End Row News List */}
            <div className="tcl-row">
              <div className="tcl-col-12 tcl-col-md-6">
                <article className="article-item style-card">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="tcl-col-12 tcl-col-md-6">
                <article className="article-item style-card">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="tcl-col-12 tcl-col-md-6">
                <article className="article-item style-card">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="tcl-col-12 tcl-col-md-6">
                <article className="article-item style-card">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="tcl-col-12 tcl-col-md-6">
                <article className="article-item style-card">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="tcl-col-12 tcl-col-md-6">
                <article className="article-item style-card">
                  <div className="article-item__thumbnail">
                    <a href="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </a>
                  </div>
                  <div className="article-item__content">
                    <h2 className="article-item__title">
                      <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                    </h2>
                    <div className="article-item__info">
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <a href="#"><strong>John Doe</strong></a>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                            1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            {/* End Row News List */}
            {/* Btn Loadmore */}
            <div className="text-center">
              <button className="btn btn-primary btn-size-large">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                  <circle cx={50} cy={50} fill="none" stroke="currentColor" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(120.057 50 50)">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                  </circle>
                </svg>
                Load more
              </button>
            </div>
          </div>
        </div>
        <div className="spacing" />
        <footer id="footer" className="bg-white">
          <div className="tcl-container">
            <div className="footer">
              <div className="tcl-row">
                {/* Footer Column */}
                <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                  <div className="footer-logo">
                    <img src="assets/images/logo.png" alt="NuxtBlog Logo" />
                  </div>
                  <p>© 2020, All Rights Reserved.</p>
                  <p>Created by <a href="#" target="_blank">ZendVN</a></p>
                </div>
                {/* Footer Column */}
                <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
                  <div className="footer-title">
                    <p>Categories</p>
                  </div>
                  <ul className="footer-content__list">
                    <li><a href="#">ReactJs</a></li>
                    <li><a href="#">Javascript</a></li>
                    <li><a href="#">Angular</a></li>
                    <li><a href="#">HTML, HTML5</a></li>
                  </ul>
                </div>
                {/* Footer Column */}
                <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                  <div className="footer-title">
                    <p>Liên hệ</p>
                  </div>
                  <ul className="footer-content__list">
                    <li>Số 01, Khối A1, Toà nhà Đạt Gia, 43 Đường Cây Keo, Tam Phú, Thủ Đức, Hồ Chí Minh</li>
                    <li>0383 308 983</li>
                  </ul>
                </div>
                {/* Footer Column */}
                <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
                  <div className="footer-title">
                    <p>Fanpage</p>
                  </div>
                  <div className="footer-facebook">
                    <div className="fb-page" data-href="https://zendvn.com/" data-tabs data-width data-height data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                      <blockquote cite="https://zendvn.com/" className="fb-xfbml-parse-ignore">
                        <a href="https://zendvn.com/">Học Lập Trình Web Thông Qua
                          Projects Thực Tế</a>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default IndexAll;