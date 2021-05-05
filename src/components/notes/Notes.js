import React from 'react';
import './Notes.css';
export class Notes extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (<div className="notes-container">
         <input type="text" name="title" placeholder="your note title"/>
         <textarea rows= "5" cols="5" placeholder="your notes here"/>
         <div className="buttons-group">
           <button type="button" name="reset"> Clear </button>
           <button type="button" name="save"> Save </button>
        </div>
      </div>);
    }
}
