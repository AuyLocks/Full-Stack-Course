import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) =>{
  return (
    <div>
      <p>{props.part} {props.excer}</p>
    </div>
  )
}

const Total = ({parts}) =>{
  return (
    <div>
      <p>Number of exercises {parts[0].exercises}</p>
    </div>
  )
}

// const Content = (props) =>{
//   return (
//     <div>
//       <Part />
//       <Part />
//       <Part />
//     </div>
//   )
// }

const App = () =>{
  const courseInfo = {
    name: 'Half Stack application development',
    parts: [
        {
        name: 'Fundamentals of React',
        exercises: 10
        },
        {
        name: 'Using props to pass data',
        exercises: 7
        },
        {
        name: 'State of a component',
        exercises: 14
        }
    ]
};

  

  return(
    <div>
      <Header course={courseInfo.name}/>
      

      <Total parts={courseInfo.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// https://github.com/Aravindh-SNR/full-stack-open-2020/blob/master/part1/courseinfo/src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Header = ({course}) => {
//     return (
//         <h1>{course}</h1>
//     );
// };

// const Part = ({part}) => {
//     return (
//         <p>
//             {part.name} {part.exercises}
//         </p>
//     );
// };

// const Content = ({parts}) => {
//     return (
//         <div>
//             <Part part={parts[0]} />
//             <Part part={parts[1]} />
//             <Part part={parts[2]} />
//         </div>
//     );
// };

// const Total = ({parts}) => {
//     return (
//         <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     );
// };

// const App = () => {
//     const course = {
//         name: 'Half Stack application development',
//         parts: [
//             {
//             name: 'Fundamentals of React',
//             exercises: 10
//             },
//             {
//             name: 'Using props to pass data',
//             exercises: 7
//             },
//             {
//             name: 'State of a component',
//             exercises: 14
//             }
//         ]
//     };

//     return (
//         <div>
//             <Header course={course.name} />
//             <Content parts={course.parts} />
//             <Total parts={course.parts} />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));