import AddNewStudent from './AddNewStudent';
import './App.css';
import Welcom from './Header/Welcom';
import StudentCard from './StudentCards';
import React, { useState } from 'react';


const people = [
  {
    name: 'Mahdi',
    studentNum: "401243051",
    userName‌: "mm850",
    pass: 8596,
  },
  {
    name: 'Fam',
    studentNum: "402258961",
    userName‌: "mm350",
    pass: 1478,
  },
  {
    name: 'Hadi',
    studentNum: "456256888",
    userName‌: "mm350",
    pass: 1245,

  },
  {
    name: 'Hadi',
    studentNum: "4566888",
    userName‌: "mm350",
    pass: 1245,

  },
]

function App() {

  const [student, setStudent] = useState(people);
  const StudentCardDeleteListener = (enteredId) => {
    console.log(enteredId);
    for (let i = 0; i < student.length; i++) {
      if (student[i].studentNum === enteredId) {
        let updating = [...student];
        updating.splice(i, 1);
        setStudent(updating);
        break;
      }
    }
  }

  const AddingNewStudentToList = (s) => {
    let temp = {
      name: s.sName,
      studentNum: s.sNumber,
      userName: s.sUser,
      pass: s.sPass,
    }

    let tempArr = [...student, temp];
    setStudent(tempArr);
  }

  return (
    <div className='container'>
      <Welcom />
      <AddNewStudent OnAddNewStudentSubmit={AddingNewStudentToList} />
      <ul>
        {student.map(student => (
          <StudentCard
            onChange={StudentCardDeleteListener}
            nameK={student.name}
            passK={student.pass}
            numberK={student.studentNum}
            id={student.studentNum}
            key={student.studentNum}
          />
        ))
        }
      </ul>

    </div>
  );
}

export default App;
