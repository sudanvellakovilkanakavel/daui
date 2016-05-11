var  React = require('react')
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({

render: function ()  {

return (

<div> Dail attendence  app component 1!! </div>

	)


}


});


ReactDOM.render(

<HelloWorld  />,

document.getElementById('app')  

);