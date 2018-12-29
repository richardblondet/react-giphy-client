import React from 'react'

/**
 * Reset styles for cleanse browser default computed styles
 * @type {template}
 */
const Reset = `
	/*!
	 * Bootstrap Reboot v4.1.3 (https://getbootstrap.com/)
	 * Copyright 2011-2018 The Bootstrap Authors
	 * Copyright 2011-2018 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
	 */dl,h1,h2,h3,h4,h5,h6,ol,p,pre,ul{margin-top:0}address,dl,ol,p,pre,ul{margin-bottom:1rem}img,svg{vertical-align:middle}body,caption{text-align:left}button,hr,input{overflow:visible}pre,textarea{overflow:auto}article,aside,figcaption,figure,footer,header,hgroup,legend,main,nav,section{display:block}dd,h1,h2,h3,h4,h5,h6,label,legend{margin-bottom:.5rem}address,legend{line-height:inherit}progress,sub,sup{vertical-align:baseline}label,output{display:inline-block}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}hr{box-sizing:content-box;height:0}abbr[data-original-title],abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{font-style:normal}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-left:0}blockquote,figure{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}img{border-style:none}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;caption-side:bottom}th{text-align:inherit}button{border-radius:0}button:focus{outline:dotted 1px;outline:-webkit-focus-ring-color auto 5px}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=radio],input[type=checkbox]{box-sizing:border-box;padding:0}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{width:100%;max-width:100%;padding:0;font-size:1.5rem;color:inherit;white-space:normal}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}
`

/**
 * Component for styles
 * @return {obect} Component
 */
export default () => (
	<React.Fragment>
		<style jxs="true" global>{ Reset }</style>
	</React.Fragment>
)