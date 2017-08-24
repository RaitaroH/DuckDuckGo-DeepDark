// ==UserScript==
// @name          DuckDuckGo DeepDark
// @namespace     https://github.com/
// @author        RaitaroH
// @homepage      https://github.com/RaitaroH/DuckDuckGo-DeepDark
// @icon          https://raw.githubusercontent.com/RaitaroH/DuckDuckGo-DeepDark/master/DDGDD-icon.png
// @include       http://duckduckgo.com/*
// @include       https://duckduckgo.com/*
// @include       http://*.duckduckgo.com/*
// @include       https://*.duckduckgo.com/*
// @run-at        document-start
// @version       1.6.5
// @grant           GM_getValue
// @grant           GM_setValue
// Changelog 1.6.5 fix for video results, removed box shadow for video results
// Changelog 1.6.4 removed blue text shadow
// Changelog 1.6.3 themed calculator and 2048 game
// Changelog 1.6.2 code background and text adjusted
// Changelog 1.6.1 little fix
// Changelog 1.6 added color picking for background like in my YouTube and Vidme themes
// Changelog 1.5 fixed white edges for the search options
// Changelog 1.4 added text highlight,readded text-shadow
// Changelog 1.3 added floating menu, added color picker on userstyles version
// Changelog 1.2 added icon
// ==/UserScript==
(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"/*Theme made by RaitaroH @https://github.com/RaitaroH/DuckDuckGo-DeepDark*/",
	"",
	"/*1.6.5*/",
	"",
	"	/*Main color variables*/",
	"	:root",
	"	{",
	"		/*User colors*/",
	"		--main-color: #00ADEE;",
	"		--main-background: #111111;",
	"		--second-background: #181818;",
	"		--hover-background: #232323;",
	"		--main-text: #EFF0F1;",
	"		--dimer-text: #CCCCCC;",
	"		",
	"		/*DeepDark colors*/",
	"		/*",
	"		--main-color: #00adee;",
	"		--main-background: #111111;",
	"		--second-background: #181818; ",
	"		--hover-background: #232323;",
	"		--main-text: #eff0f1;",
	"		--dimer-text: #CCCCCC;",
	"		*/",
	"		",
	"		/*KDE colors*/",
	"		/*",
	"		--main-color: #3DAEE9;",
	"		--main-background: #232629;",
	"		--second-background: #2a2e32;",
	"		--hover-background: #31363b;",
	"		--main-text: #eff0f1;",
	"		--dimer-text: #bdc3c7;",
	"		*/",
	"				",
	"		/*Vertex Dark colors*/",
	"		/*",
	"		--main-color: #4080fb;",
	"		--main-background: #2B2B2C;",
	"		--second-background: #353638;",
	"		--hover-background: #515254;",
	"		--main-text: #F3F3F5;",
	"		--dimer-text: #AEAFB0;",
	"		*/",
	"		",
	"		/*Arc Dark colors*/",
	"		/*",
	"		--main-color: #5294E2;",
	"		--main-background: #343944;",
	"		--second-background: #383C4A;",
	"		--hover-background: #414A59;",
	"		--main-text: #C1C8D1;",
	"		--dimer-text: #B3BAC5;",
	"		*/",
	"		",
	"		/*Firefox Dark colors*/",
	"		/*",
	"		--main-color: #5675B9;",
	"		--main-background: #272B35;",
	"		--second-background: #181D20;",
	"		--hover-background: #353A44;",
	"		--main-text: #E3EEF9;",
	"		--dimer-text: #989798;",
	"		*/",
	"		",
	"		/*Discord colors*/",
	"		/*",
	"		--main-color: #7289DA;",
	"		--main-background: #1E2124;",
	"		--second-background: #2F3136;",
	"		--hover-background: #484B51;",
	"		--main-text: #FFFFFF;",
	"		--dimer-text: #ADA8AA;",
	"		*/",
	"		",
	"		/*YouTube dark colors*/",
	"		/*",
	"		--main-color: #E52117;",
	"		--main-background: #111111;",
	"		--second-background: #232323;",
	"		--hover-background: #343434;",
	"		--main-text: #E1E1E1;",
	"		--dimer-text: #7F7F7F;",
	"		*/",
	"		",
	"		/*Mint-Y-Dark colors*/",
	"		/*",
	"		--main-color: #9AB87C;",
	"		--main-background: #2F2F2F;",
	"		--second-background: #383838;",
	"		--hover-background: #404040;",
	"		--main-text: #FFFFFF;",
	"		--dimer-text: #D5DADA;",
	"		*/",
	"		}",
	"",
	"	/*Changed text highlight*/",
	"	::selection",
	"	{",
	"		background: var(--main-color) !important;",
	"		color: var(--main-text) !important;",
	"	}",
	"	::-moz-selection",
	"	{",
	"		background: var(--main-color) !important;",
	"		color: var(--main-text) !important;",
	"	}",
	"	",
	"	/*Outline for links*/",
	"	a",
	"	{",
	"				outline-color: var(--main-color) !important;",
	"	}",
	"	a:hover",
	"	{",
	"		text-decoration: none !important;",
	"	}",
	"",
	"	.svg .header__logo,.svg.dark-header .header__logo",
	"	{",
	"		background-image: url(https://raw.githubusercontent.com/RaitaroH/DuckDuckGo-DeepDark/master/Images/logo.png) !important;",
	"	}",
	"",
	"	.svg .logo_homepage",
	"	{",
	"		background-image: url(https://raw.githubusercontent.com/RaitaroH/DuckDuckGo-DeepDark/master/Images/BigLogo.png) !important;",
	"	}",
	"	/*Added floating search bar*/",
	"	.set-header--fixed .header-wrap,.header-wrap",
	"	{",
	"		position: fixed !important;",
	"		width: 100% !important;",
	"		top: 0 !important;",
	"		left: 0 !important;",
	"		right: 0 !important;",
	"		z-index: 100 !important;",
	"		padding-bottom: 0 !important;",
	"	}",
	"",
	"	.zci-wrap",
	"	{",
	"		margin-top: 100px !important;",
	"	}",
	"",
	"	.header-wrap, .header-wrap--home",
	"	{",
	"		border-bottom: 1px solid var(--second-background) !important;",
	"	}",
	"",
	"	.search-filters-wrap::after,.search-filters-wrap::before",
	"	{",
	"		background-image: none !important;",
	"	}",
	"	/*",
	"	.search-filter--region .search-filter__icon, .search-filter--region .dark-header .search-filter__icon, .dark-header .nav-menu__item__icon--region, .dark-bg .search-filter--region .search-filter__icon, .search-filter--region .dark-bg .search-filter__icon, .dark-bg .nav-menu__item__icon--region {",
	"		background-image: url(/assets/icon_region_dark.svg) !important;",
	"	}",
	"	*/",
	"	.set-main .frm__section-label,a:hover,.result__url__domain,.module__title__link,.corner_btn.reset:hover,.zci--timer .corner_btn.add_minute,.result__url:hover,.no-touch .header-wrap .zcm__link.is-active:hover,.no-touch .site-wrapper .zcm__link:hover, .zcm__link:hover, .zcm__link:visited,.logo_homepage__tt,.a:link:hover,.highlight .result__a:hover,a.result__menu:hover",
	"	{",
	"		color: var(--main-color) !important;",
	"		opacity: 0.9 !important;",
	"	}",
	"",
	"	.result__url__domain:hover,.module__title,.result__a:hover",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"",
	"	.zcm__link.is-active,.zci--timer .play_pause .first_half_fill, .zci--timer .play_pause .rotated_fill",
	"	{",
	"		border-color: var(--main-color) !important;",
	"	}",
	"",
	"	.zci--stopwatch .stopwatch__btn.start",
	"	{",
	"		border-color: var(--main-color) !important;",
	"		background-color: var(--main-color) !important;",
	"	}",
	"",
	"	.modal__header__title",
	"	{",
	"		border-color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.sitelinks_td:hover,.result:hover,.result.highlight,.logo_homepage__tt,.about-info-box__toggle__chevron:hover",
	"	{",
	"		background-color: var(--main-background) !important;",
	"	}",
	"",
	"	.module__text,.prettyprint .pln,.prettyprint .pun",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.zci--timer #add_timer_container,.zci--timer .corner_btn.add_minute",
	"	{",
	"		background: transparent !important;",
	"	}",
	"",
	"	.fe_icon, .fe_icon--alt",
	"	{",
	"		filter: invert(100%) !important;",
	"	}",
	"",
	"	#twitter_status,#ads,.feedback-btn,.nav-menu--slideout .badge-link,.logo_homepage__tt::before,.badge-link",
	"	{",
	"		display: none!important;",
	"	}",
	"",
	"	body,.body--home,.site-wrapper,.modal__box,.sitelinks_td",
	"	{",
	"		background-color: var(--main-background) !important;",
	"	}",
	"",
	"	.region-switch__label,.tag-home__link,.tag-home__link:hover,.tag-home__link:visited,.tag-home__link:active,.tag-home__nav__close:hover,.results,.msg,.feedback-btn__icon:hover,.feedback-btn__send:hover,.feedback-btn__icon:focus,.feedback-btn__send:focus",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tag-home__nav__wrap:hover",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.result__check",
	"	{",
	"		color: var(--main-background) !important;",
	"	}",
	"",
	"	.result__check:visited,.feedback-btn,.feedback-btn:hover",
	"	{",
	"		color: var(--second-background) !important;",
	"	}",
	"",
	"	.result__a,.result__a:active,.highlight .result__a,.result__a:visited,.tag-home,.page-settings,.frm__label,.no-results__related-search a,.no-results__related-search a:visited,.no-results__related-search a:active,.no-results__related-search a:hover,.modal__box,.modal__header__title,.modal__list__link,.modal__list__link:hover,.modal__list__link:visited,.modal__list__link:focus,.modal__list__link.is-active,.modal__list__link.is-highlighted,.feedback-btn__icon,.feedback-btn__send,.feedback-modal .frm__label",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"",
	"	.settings-page-wrapper .set-side a,.settings-page-wrapper .set-side a:hover,.settings-page-wrapper .set-side a:active",
	"	{",
	"		color: var(--dimer-text) !important;",
	"		text-decoration: underline!important;",
	"	}",
	"",
	"	.btn--top,.result--sep--hr:before,.result--load-btn,.feedback--button.btn--wire",
	"	{",
	"		color: var(--dimer-text) !important;",
	"		border-color: var(--second-background) !important;",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.btn--top:hover,.feedback--button.btn--wire:hover",
	"	{",
	"		color: var(--dimer-text) !important;",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.results--powered",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.set-bookmarklet,.set-reset,.set-head,.set-thumbnail__img,.set-main-footer,.frm__color__swatch",
	"	{",
	"		border-color: var(--second-background) !important;",
	"	}",
	"",
	"	.cloudsave,.modal__list__link:hover,.modal__list__link.is-active,.modal__list__link.is-highlighted,.modal--region-filter .modal__list__link.is-highlighted",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.set-bookmarklet__input,.set-bookmarklet__data,.btn,.btn:visited,.btn:hover,.frm__input",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-color: var(--second-background) !important;",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.add-to-browser__directions .btn.btn--primary",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-color: transparent!important;",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.frm__hr,.btn:active",
	"	{",
	"		border-color: var(--second-background) !important;",
	"	}",
	"",
	"	.btn.is-active,.btn.btn--primary,.btn--primary:hover,.is-checked .btn.frm__switch__label",
	"	{",
	"		color: var(--main-background) !important;",
	"		border-color: var(--second-background) !important;",
	"		background-color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.switch,.region-flag__bg",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.region-switch__label-status-on",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.modal--popover.is-showing,.modal--popover--dk.is-showing",
	"	{",
	"		background: var(--main-background) !important;",
	"	}",
	"",
	"	.modal__box",
	"	{",
	"		border: 1px solid var(--second-background) !important;",
	"	}",
	"",
	"	.modal__header",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-bottom-color: var(--second-background) !important;",
	"	}",
	"",
	"	.modal--popout--bottom.has-header .modal__box:before,.modal--popout--bottom-right.has-header .modal__box:before,.modal--popout--bottom-left.has-header .modal__box:before,.modal--popout--bottom.has-header .modal__box:after,.modal--popout--bottom-right.has-header .modal__box:after,.modal--popout--bottom-left.has-header .modal__box:after,.modal--popout .modal__box:before",
	"	{",
	"		color: var(--second-background) !important;",
	"	}",
	"",
	"	.modal--popout .modal__box:after",
	"	{",
	"		color: var(--main-background) !important;",
	"	}",
	"",
	"	.nav-menu,.nav-menu--slideout",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.nav-menu--slideout",
	"	{",
	"		border-left-color: var(--second-background) !important;",
	"		-webkit-box-shadow: none!important;",
	"		-moz-box-shadow: none!important;",
	"		box-shadow: none!important;",
	"	}",
	"",
	"	.nav-menu__icon,.nav-menu__close,.nav-menu__item,.nav-menu__item--secondary,.nav-menu__item > a,.nav-menu__item--secondary > a,.nav-menu__item > a:visited,.nav-menu__item--secondary > a:visited",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.nav-menu__item > a:hover",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.nav-menu__heading,.nav-menu__heading--primary",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.nav-menu__theme.theme-is-selected",
	"	{",
	"		border-color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.result__snippet,.result__snippet b,.result__snippet a,.result__snippet a:hover,.result__snippet a:active,.result__snippet a:visited",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.result__url,.result__url:visited,.result__url:active,a.result__menu,a.result__menu:active,a.result__menu:visited,.result--ad .result__url,.result--ad .result__url:hover,.result--ad .result__url:active,.result--ad .result__url:visited,.sponsored__sitelink, .sponsored__sitelink b, .sponsored__sitelink:visited,.sponsored__sitelink:hover",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.msg--result.highlight,.msg--box",
	"	{",
	"		background: var(--second-background) !important;",
	"	}",
	"",
	"	.result.result--ad.highlight",
	"	{",
	"		background: none!important;",
	"	}",
	"",
	"	.msg--bang__bang-name",
	"	{",
	"		color: var(--dimer-text) !important;",
	"		background-color: var(--second-background) !important;",
	"		border-color: var(--second-background) !important;",
	"	}",
	"",
	"	.msg--bang__bangs-link,.msg--bang__bangs-link:hover,.msg--bang__bangs-link:visited,.msg--bang__bangs-link:active,.msg--spelling :link,.msg--spelling :link:visited,.msg--spelling :link:hover,.msg--spelling :link:active",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.header-wrap, .has-active-zci .header-wrap, .has-active-zci .header-wrap .zcm__link:before, .has-active-zci .header-wrap .zcm__link:after, .has-zcm .header-wrap:before, .has-zcm .header-wrap:after, .has-zcm .header-wrap .header:after",
	"	{",
	"		background-color: var(--main-background) !important;",
	"	}",
	"",
	"	.no-touch .header-wrap .zcm__link.is-active",
	"	{",
	"		background-color: transparent!important;",
	"	}",
	"",
	"	.header-wrap.header-wrap--home",
	"	{",
	"		background: none!important;",
	"	}",
	"",
	"	.has-active-zci .header-wrap",
	"	{",
	"		border-bottom-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.header-wrap, .header-wrap--home",
	"	{",
	"		border-top-color: var(--second-background) !important;",
	"	}",
	"",
	"	.site-wrapper-border",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.no-touch .site-wrapper .zcm__link, .zcm__link, .zcm__link:visited",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.zcm__link:hover,.zcm__link:active,.zcm__link.is-active",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.no-touch .header-wrap .zcm__link.is-active",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.zcm__sep--h:before",
	"	{",
	"		border-left-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.lt-ie9 .header-wrap",
	"	{",
	"		border-bottom-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.set-header--menu.has-zcm.is-mobile .header--aside",
	"	{",
	"		background: -moz-linear-gradient(left, var(--dimer-text) 0%, var(--hover-background) 40%, var(--hover-background) 100%) !important;",
	"		background: -webkit-linear-gradient(left, var(--dimer-text) 0%, var(--hover-background) 40%, var(--hover-background) 100%) !important;",
	"		background: -o-linear-gradient(left, var(--dimer-text) 0%,var(--hover-background) 40%,var(--hover-background) 100%) !important;",
	"		background: -ms-linear-gradient(left, var(--dimer-text) 0%, var(--hover-background) 40%, var(--hover-background) 100%) !important;",
	"		background: linear-gradient(to right, var(--dimer-text) 0%, var(--hover-background) 40%, var(--hover-background) 100%) !important;",
	"	}",
	"",
	"	.is-mobile .zcm-wrap--header:before,.is-mobile .zcm-wrap--header:after",
	"	{",
	"		background: -moz-linear-gradient(left, var(--dimer-text) 0%, var(--hover-background) 50%, var(--dimer-text) 100%) !important;",
	"		background: -webkit-gradient(linear, left top, right top, color-stop(0%,var(--dimer-text)), color-stop(50%,var(--hover-background)), color-stop(100%,var(--dimer-text))) !important;",
	"		background: -webkit-linear-gradient(left, var(--dimer-text) 0%,var(--hover-background) 50%,var(--dimer-text) 100%) !important;",
	"		background: -o-linear-gradient(left, var(--dimer-text) 0%,var(--hover-background) 50%,var(--dimer-text) 100%) !important;",
	"		background: -ms-linear-gradient(left, var(--dimer-text) 0%,var(--hover-background) 50%,var(--dimer-text) 100%) !important;",
	"		background: linear-gradient(to right, var(--dimer-text) 0%,var(--hover-background) 50%,var(--dimer-text) 100%) !important;",
	"	}",
	"",
	"	.btn--icon,.header__button--menu,.no-touch .btn--icon,.no-touch .header__button,.no-touch .header__button--menu",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.header--aside__msg",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"	.header--aside__msg:hover",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"",
	"	.no-touch .btn--icon:hover,.no-touch .header__button:hover,.no-touch .header__button--menu:hover, .no-touch .header__button:focus, .no-touch .header__button--menu:focus",
	"	{",
	"		color: var(--second-background) !important;",
	"		background-color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.search--home,.search--header",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-color: var(--second-background) !important;",
	"	}",
	"",
	"	.search__clear,.search__button,.search--home.has-text .search__clear",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.search__button--active,.search:hover .search__button,.search__input:focus ~ .search__button,.search--header.has-text.search--hover .search__button,.search--header.has-text.search--focus .search__button,.search--home.has-text .search__button,.search__button:focus,.search:hover .search__button:focus,.search--home.has-text .search__button:focus",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"	.search__button:hover,.search--header.has-text.search--focus .search__button:hover,.search--header.has-text.search--hover .search__button:hover,.search--home.has-text .search__button:hover",
	"	{",
	"		background-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.search__input--adv",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.search__autocomplete,.acp-wrap__column.acp-wrap__column--left",
	"	{",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.acp-wrap,.acp-footer",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.acp, .acp--bang",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.acp strong,.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__snippet",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.acp--highlight",
	"	{",
	"		background-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.zci, .zci:before,.tileview .metabar--fixed,.tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck,.mapview.is-expanded .zci",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-bottom-color: var(--main-background) !important;",
	"	}",
	"",
	"	.zci-wrap",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.set-header--fixed .tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-top-color: var(--second-background) !important;",
	"	}",
	"",
	"	.zci.is-active",
	"	{",
	"		border-bottom-color: var(--second-background) !important;",
	"	}",
	"",
	"	.zci__body,.zci__detail,.zci__caption,.zci__header,.zci__body h1, .zci__detail h1,.zci__body h2, .zci__detail h2,.zci__body h3, .zci__detail h3,.zci__body h4, .zci__detail h4,.zci__body h5, .zci__detail h5,.zci__body h6, .zci__detail h6,.metabar,.c-detail__title,.c-detail__title__sub,.c-detail__desc,.c-detail__filemeta,.c-detail__more,.c-detail__user,.c-detail__count,.c-detail__date,.c-info,.c-info__title,.c-icon,.c-icon__title,.c-icon__content,.c-score,.metabar__dropdown__selected,.metabar__dropdown__selected:hover,.metabar__dropdown__selected:focus",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.detail--l .detail__media, .detail--products .detail__media, .detail--qa .detail__media, .detail--about .detail__media,.detail--l .detail__media:after, .detail--products .detail__media:after, .detail--qa .detail__media:after, .detail--about .detail__media:after",
	"	{",
	"		background: none!important;",
	"	}",
	"",
	"	a,a.no-visited,.zci__body a,.zci__detail a,.zcm__link--sub,.zcm__link--sub:visited,.zci__body .chomp--link,.metabar .zci__more-at,.zci__body .zci__more-at,.zci__body .c-detail__rating :link,.zci__more-at,.tile--loc__more,.c-info__link,.c-icon__link,.chomp--link__mr,.chomp--link__ls",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.detail__body a:hover,.zci__body a:active,.zci__body a:active,.zcm__link--sub.is-here,.zcm__item.is-here .zcm__link--sub,.zci__body .chomp--link:hover,.zci__more-at:hover,.c-info__link:hover,.c-icon__link:hover,.zcm__link--sub.is-highlighted,.chomp--link:hover .chomp--link__mr,.chomp--link:hover .chomp--link__ls",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"	.zci__body a:hover, .zcm__link--sub:hover",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"	.zci pre,.zci code",
	"	{",
	"		color: var(--dimer-text) !important;",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.zci pre,.zci code,.c-list__items,.record__cell",
	"	{",
	"		border-color: var(--main-background) !important;",
	"	}",
	"",
	"	.metabar__mode",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.metabar__mode.is-disabled,.metabar__mode.is-disabled:hover,.metabar__mode.is-disabled:active",
	"	{",
	"		color: var(--second-background) !important;",
	"		background-color: transparent!important;",
	"	}",
	"",
	"	.detail",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-color: var(--main-background) !important;",
	"	}",
	"",
	"	.detail__close",
	"	{",
	"		color: var(--second-background) !important;",
	"	}",
	"",
	"	.detail__close:hover,.detail__close:active",
	"	{",
	"		color: var(--hover-background) !important;",
	"	}",
	"",
	"	.detail__media--pr",
	"	{",
	"		border-right-color: var(--main-background) !important;",
	"	}",
	"",
	"	.tile--img:after",
	"	{",
	"		border-bottom-color: var(--second-background) !important;",
	"	}",
	"",
	"	.sep,.sep--small,.sep--before:before,.sep--after:after",
	"	{",
	"		border-color: var(--second-background) !important;",
	"	}",
	"",
	"	.mapview.is-expanded .metabar,.tileview--grid .metabar--fixed:before",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.tile-nav.can-scroll,.tile-nav.can-scroll:after,.tile-nav.can-scroll:hover",
	"	{",
	"		background-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.chomp--link__icn,.count__i:after",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tile-nav--sm",
	"	{",
	"		color: var(--dimer-text) !important;",
	"		background-color: var(--second-background) !important;",
	"	}",
	"",
	"	.tile-nav--sm:hover,.tile-nav--sm:active",
	"	{",
	"		background-color: var(--hover-background) !important;",
	"	}",
	"",
	"	.c-detail__links__btn,.zci .btn--primary,.zci .btn.btn--primary,.c-detail__links__btn:hover,.zci .btn--primary:hover,.zci__body a.btn--primary:hover",
	"	{",
	"		color: var(--dimer-text) !important;",
	"		background-color: var(--second-background) !important;",
	"		border-color: var(--main-background) !important;",
	"	}",
	"",
	"	.star,.count__i,.tileview__message,.tileview__message:before,.tile--loc .tile__media__no-img",
	"	{",
	"		color: var(--second-background) !important;",
	"	}",
	"",
	"	.tile, .tile--s, .tile--info .tile--map",
	"	{",
	"		border-color: var(--main-background) !important;",
	"	}",
	"",
	"	.highlight.tile, .highlight.tile--s, .highlight.tile--info, .highlight.tile--map,.is-selected.tile, .is-selected.tile--s, .is-selected.tile--info, .is-selected.tile--map,.highlight.tile--f .tile--f__main, .highlight.tile--f .tile--f__alt, .is-selected.tile--f .tile--f__alt",
	"	{",
	"		border-color: var(--dimer-text) !important;",
	"		outline-color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.highlight.tile--no-highlight, .highlight.tile--no-highlight:active, .tile--no-highlight.is-selected",
	"	{",
	"		border-color: var(--main-background) !important;",
	"		outline: none!important;",
	"	}",
	"",
	"	.tile--m",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tile--m:hover",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tile--m:active,.tile--m.is-loading,.tile--m.is-loading:hover",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		color: var(--main-background) !important;",
	"	}",
	"",
	"	.has-tiles--grid .tile--m--images,.has-tiles--grid .tile--m--images:hover,.has-tiles--grid .tile--m--images.is-loading,.is-mobile .has-tiles--grid .tile--m,.is-mobile .has-tiles--grid .tile--m:hover",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		border-color: var(--second-background) !important;",
	"	}",
	"",
	"	.bg-clr--dk,.bg-clr--dk2,.bg-clr--slate,.bg-clr--slate-light",
	"	{",
	"		background-color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.bg-clr--lt,.bg-clr--lt2,.bg-clr--lt3,.bg-clr--grey-dark,.bg-clr--grey-light,.bg-clr--grey",
	"	{",
	"		background-color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.text--primary,.tx-clr--dk,.tx-clr--dk2,.tx-clr--slate,.tx-clr--slate-light",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.zci__subheader,.zci__header__sub,.c-info__sub,.c-info__title__sub,.c-icon__sub,.c-score__head,.c-score__foot,.text--secondary,.tx-clr--grey-dark,.tx-clr--grey-light,.tx-clr--grey,.tx-clr--lt,.tx-clr--lt2,.tx-clr--lt3",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tile, .tile__title, .tile h4, .tile--m--mob, .at-topic .tile__title, .at-topic .tile.active-topic .tile__title, .at-topic .tile.highlight .tile__title, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile--loc, .tile .tile__price b",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tile, .tile--s, .bg-tile, .tile--m--mob, .tile__media--pr, .at-topic .tile.active-topic, .at-topic .tile.highlight, .tile__foot--news, .tile--f__main, .tile--f__alt, .tile__num:before, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile__media .tile__media__img",
	"	{",
	"		background-color: var(--main-background) !important;",
	"	}",
	"",
	"	.tile__expand, .tile__expand:hover,.bg-clr--platinum-darker,.bg-clr--platinum-dark,.bg-clr--platinum-light,.bg-clr--platinum,.bg-clr--silver-dark,.bg-clr--silver-light,.bg-clr--silver",
	"	{",
	"		background: var(--second-background) !important;",
	"	}",
	"",
	"	.at-topic .tile,.tile--loc .tile__media__no-img",
	"	{",
	"		background: var(--second-background) !important;",
	"	}",
	"",
	"	.tile__sub, .tile__sub--2, .tile__title__sub, .tile__foot, .tile__footer, .tile__link, .tile--audio .tile__footer, .tile__count, .tile--b--i .tile__source, .tile__neighborhood, .tile__more-at, .tile__title a:visited,.tx-clr--platinum-darker, .tx-clr--platinum-dark, .tx-clr--platinum-light, .tx-clr--platinum,.tx-clr--silver-dark, .tx-clr--silver-light, .tx-clr--silver",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tile--b--i .tile__description, .tile__content, .tile__content--qa, .tile__content--news, .tile__tx, .tile__expand, .tile__expand:hover, .tile__num, .tile__phone, .info__label, .info__value, .tile__foot, .tile__foot--news, .attribution--link__icon",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"",
	"	.tile--info .info, .tile__expand, .tile__expand:hover, .attribution__hr, .c-score__line, .c-score__foot, .has-score .c-score__line__name, .is-mobile .no-score .c-score__line--home, .c-score__line--vs1:before, .c-score__line--vs1:after",
	"	{",
	"		border-color: var(--second-background) !important;",
	"	}",
	"",
	"	.tile--f__main, .tile--f__alt, .csstransforms3d .tile--f__main, .csstransforms3d .tile--f__alt, .is-mobile .c-info__link",
	"	{",
	"		border-color: var(--main-background) !important;",
	"	}",
	"",
	"	.tile .tile__price",
	"	{",
	"		color: var(--second-background) !important;",
	"	}",
	"	",
	"	",
	"	/*Some stuff in searches and such*/",
	"	.about-info-box__info-label",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.about-info-box__info-value",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"	.nav-menu__heading span",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.nav-menu__list li:hover > a",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"	.result__body:hover .result__a",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"	.metabar__dropdowns-wrap::after, .metabar__dropdowns-wrap::before",
	"	{",
	"		background-image: none !important;",
	"	}",
	"	.is-expanded .metabar__grid-btn, .is-expanded .metabar__grid-btn:hover",
	"	{",
	"		border: none !important;",
	"	}",
	"	.modal--dropdown .modal__list__link:hover",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"	.tile.tile--c--w.tile--vid.has-detail.opt--t-xxs:hover, .tile.tile--c.js-tile--Top:hover, .has-tiles .tile:hover",
	"	{",
	"		border: none !important;",
	"		box-shadow: none !important;",
	"	}",
	"	.tile.tile--c--w.tile--vid.has-detail.opt--t-xxs:hover .tile__title a, .tile.tile--c.js-tile--Top:hover .tile__title a, .has-tiles .tile:hover .tile__title a",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"	/*Video results*/",
	"	.metabar__primary-text--linked",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"	",
	"	",
	"	/*Currency stuff*/",
	"	.zci--currency .frm__select, .zci--currency .frm__select::after, .zci--currency .frm__input",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.zci--currency .shadow",
	"	{",
	"		box-shadow: none !important;",
	"	}	",
	"	.zci--currency .frm__select select, .frm__select",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	",
	"	",
	"	",
	"	/*About page*/",
	"	.blk__title, .abt__title, .timeline__title, .ddh__title, .app__title, .abt__key__title, h4, .news-tile__title, .news-tile__source",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.abt__key__sub, .abt__key p",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}	",
	"	.abt__key__link::before, .news-tile__link::before",
	"	{",
	"		background: var(--main-color) !important;",
	"	}",
	"	.map__title",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}	",
	"	",
	"	",
	"	/*Bangs*/",
	"	.bang__list-header__title, .bang__heading, .bang--about__title, .bang--about__snippet, .bang--about__text > a",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.bang__list-header__snippet, .no-visited, .bang--about__content, .bang--about__text, .bang__list-header",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	} ",
	"	.no-visited:hover, .bang--about__text > a:hover",
	"	{",
	"		color: var(--main-color) !important;",
	"	}	",
	"	.bang__result__bang-name, .blk--alt",
	"	{",
	"		background-color: var(--second-background) !important;",
	"	}",
	"	.bang__resultset, .bang--about, .blk--foot",
	"	{",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.blk--foot",
	"	{",
	"		color: var(--main-text) !important;",
	"		background-color: var(--hover-background) !important;",
	"	}	",
	"	.blk--hero + .blk--arr::before ",
	"	{",
	"		border-top-color: #e37151 !important;",
	"	}",
	" ",
	"	",
	"	/*Settings*/",
	"	.set-main .frm__label, .frm__select, .frm__select, .frm__select select",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.frm__desc.frm__desc--break-xs",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}	",
	"	.frm__select select, .frm__select",
	"	{",
	"		border-color: var(--hover-background) !important;",
	"		background-color: var(--second-background) !important;",
	"	}	",
	"	",
	"	",
	"	/*Privacy page*/",
	"	.blk__text",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}	",
	"",
	"	",
	"	/*App page*/",
	"	.app__key__title",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.app__key p",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	} ",
	"	.blk--arr::before, .blk--arr--white::before",
	"	{",
	"		border-top-color: var(--main-background) !important;",
	"	}",
	"	",
	"	/*Code response*/",
	"	.module__text pre",
	"	{",
	"		background: var(--second-background) !important;",
	"	}",
	"	.prettyprint .com, .module__title__sub",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"	.prettyprint .lit",
	"	{",
	"		color: var(--main-color) !important;",
	"	}",
	"	",
	"	",
	"	/*The calculator*/",
	"	.zci--calculator .tile__calc .tile__display, .zci--calculator .tile__calc .tile__history, .zci--calculator .tile__calc .tile__ctrl--ops, .zci--calculator .tile__calc .tile__tab__sci .tile__ctrl__btn, .zci--calculator .tile__calc .tile__ctrl__toggle",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.zci--calculator .tile__calc .tile__past-calc, .zci--calculator .tile__calc .tile__ctrl__btn",
	"	{",
	"		background-color: var(--second-background) !important;",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.zci--calculator .tile__calc .tile__ctrl--important",
	"	{",
	"		background-color: var(--main-color) !important;",
	"		border-color: var(--main-color) !important;",
	"	}",
	"	.zci--calculator .tile__calc .tile__display, .zci--calculator .tile__calc .tile__history, .zci--calculator .tile__calc .tile__ctrl--ops, .zci--calculator .tile__calc .tile__tab__sci .tile__ctrl__btn, .zci--calculator .tile__calc .tile__ctrl__toggle, .zci--calculator .tile__calc .tile__ctrl__btn, .zci--calculator .tile__calc .tile__past-calc, .zci--calculator .tile__calc .tile__display__main, .zci--calculator .tile__calc .tile__past-result",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.zci--calculator .tile__calc .tile__ctrl__btn:hover, .zci--calculator .tile__calc .tile__ctrl__toggle:hover",
	"	{",
	"		background-color: var(--hover-background) !important;",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.zci--calculator .tile__calc .tile__display__aside, .zci--calculator .tile__calc .tile__past-formula",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"	.zci--calculator .tile__ctrl__toggle-slider",
	"	{",
	"		background-color: var(--dimer-text) !important;",
	"	}",
	"	.zci--calculator .tile__calc__col",
	"	{",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.zci--calculator .tile__calc .tile__display:hover",
	"	{",
	"		box-shadow: inset -1px -1px 0px var(--main-color), inset 1px 1px 0px var(--main-color) !important;",
	"	}",
	"	.zci--calculator .tile__calc .tile__display",
	"	{",
	"		box-shadow: inset -1px -1px 0px var(--hover-background), inset 1px 1px 0px var(--hover-background) !important;",
	"	}",
	"	",
	"	",
	"	/*2048 game*/",
	"	.zci--game2048 .game2048__area",
	"	{",
	"		background-color: var(--main-background) !important;",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.zci--game2048 .cell",
	"	{",
	"		background-color: var(--hover-background) !important;",
	"		border-color: var(--hover-background) !important;",
	"	}",
	"	.zci--game2048 .game2048__new_game",
	"	{",
	"		background-color: var(--main-color) !important;",
	"		color: var(--main-text) !important;",
	"	}",
	"	.zci--game2048 .game2048__points",
	"	{",
	"		color: var(--main-text) !important;",
	"	}",
	"	.zci--game2048 .game2048__help",
	"	{",
	"		color: var(--dimer-text) !important;",
	"	}",
	"	.zci--game2048 .game2048__area:focus",
	"	{",
	"		box-shadow: none !important;",
	"		-webkit-box-shadow: none !important;",
	"		-moz-box-shadow: none !important;",
	"	}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
