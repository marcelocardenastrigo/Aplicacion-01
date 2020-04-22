import React, {Component} from 'react';
class Tasks extends Component {
    render() {
        return <div>
        {this.props1.tasks.map(e => <p key={e.id}>
            {e.title} - {e.description} - {e.done} - {e.id}
            
            </p>)
    }
    </div>
    }
}
export default Tasks;