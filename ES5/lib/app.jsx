var App = React.createClass({

    propTypes: {

    },

    getInitialState:function(){
        return {};
    },

    render: function() {
        return(
            <div>
                <h1>React Tutorial - ADeveloperDiary.com</h1>
            </div>
        )
    }
});


ReactDOM.render(<App/>,document.getElementById('root'));