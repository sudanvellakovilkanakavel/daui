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

//2.1 attendence table colum component start here

var SmallOne= React.createClass({

render: function ()  {

return (

<div> attendence table colum component !! </div>

	)


}



});


//2.1. attendence table colum component end here

//2.2. attendence table data component start here

var SmallTwo= React.createClass({

render: function ()  {

return (

<div> attendence table  data component !! </div>

	)


}



});


//2.2. attendence table data component end here


//2. body component start here

var BodyAll= React.createClass({

render: function ()  {

return (

<div> <SmallOne /> <SmallTwo  /> </div>

	)


}



});


//2. body  component end here


//0. Complete ui component start here

var AllUi= React.createClass({

render: function ()  {

return (

<div> <BigAll /> <BodyAll  /> </div>

	)


}



});


//0. complete ui component end here



ReactDOM.render(

<AllUi  />,

document.getElementById('app')  

); 



