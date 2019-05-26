import React, {Component} from 'react';
import '../App.css';
import AnotherTest from './AnotherTest';

export default class Demo extends Component {

    state = {
            counter: 0,
            projects: [0],
          };

  onAddProject = () => {

    let a = this.state.counter;
    a++;
    let b = this.state.projects;
    b.push(a);
    this.setState({counter:a});
    this.setState({projects:b});

  }
  onRemoveProject = () => {

    let a = this.state.counter;
    a--;
    let b = this.state.projects;
    b.pop(a);
    this.setState({counter: a});
    this.setState({projects: b});
    
  }
  receiveChartType = type => {
   
    console.log('Selected chart type, from Demo component');

  }
  renderProjects = () =>{

    const test = this.state.projects.map(id => {
        return <AnotherTest id={id} key={id} onAddProject={this.onAddProject} onRemoveProject={this.onRemoveProject} receiveChartType={this.receiveChartType}/>
    });
    return test;
  }
  render() {
      
    const projects = this.renderProjects();

	return(  

    <div className="chart">
      {projects}
		</div>



	)

}
}