


import React from 'react';

class TaskForm extends React.Component{

	constructor(props){

	super(props);
	this.state = {
		task: ""
		};
	}

	render(){
		return (
		<form>	
			<p><input type="text" value={this.state.task} onChange={event => { 
			
				
				this.setState({

					task:event.target.value

				});
			}} placeholder="Escribe una neva tarea" /></p>
			<p><button type="button" onClick={() => { 

				if (this.state.task.trim() == ""){	
					this.setState({
						task: ""
					});

					return;
				}

				this.props.onAddTask(this.state.task);

				this.setState({
					task:""
				});
			}}>+</button></p>
    	</form> 		

		);
	}
}

export default TaskForm;
