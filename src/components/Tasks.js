import React, {Component} from 'react';
class Tasks extends Component {
    render() {
        return <div>
        {this.props.tasks.map(e => <p key={e.id}>
            {e.title} - {e.description} - {e.done} - {e.id}
            <input type="checkbox"/>
            <button>
                x
            </button>
            </p>)
    }
    </div>
    }
}
export default Tasks;