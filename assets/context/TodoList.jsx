import React, {createContext} from 'react';


export const getContext = createContext(undefined);

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo : [
                {
                    task: 'a task'
                }
            ]
        };
    }

    createList() {

    }

    readList() {

    }

    updateList() {

    }

    deleteList() {

    }
    render() {
        return(
           <getContext.Provider value= {
               {
                    ...this.state,
                   createList: this.createList.bind(this),
                   readList: this.readList.bind(this),
                   updateList: this.readList.bind(this),
                   deleteList: this.deleteList.bind(this),
               }
           }>
               {this.props.children}
           </getContext.Provider>
        );
    }
}

export default TodoList;