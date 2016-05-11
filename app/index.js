var  React = require('react')
var ReactDOM = require('react-dom');

//1.1.App Title component starts here

var BigOne= React.createClass({

render: function ()  {

return (

<div> App title component !! </div>

	)


}


});

//1.1.App Title components ends here

//1.2.App search component starts here

var BigTwo= React.createClass({

render: function ()  {

return (

<div> App seasrch component !! </div>

	)


}



});

//1.2.App search component ends here

//  1.header component starts here

var BigAll= React.createClass({

render: function ()  {

return (

<div> <BigOne /> <BigTwo /> </div>

	)


}



});

// 1.header component ends here




ReactDOM.render(

<BigAll  />,

document.getElementById('app')  

); 



