

import React from 'react';

class TaskForm extends React.Component{

	render(){
		return (
		<form>
			<p><input type="text" name="task" placeholder="Escribe una neva tarea" /></p>
			<p><button type="button">+</button></p>
    	</form> 		

		);
	}
}

export default TaskForm;
