const studentApi = async () => {
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('loading').classList.add('flex');
  const res = await fetch("https://sheetdb.io/api/v1/xzodpywpk6f9y");
  const data = await res.json();
  const studentRanking = data;
  showStudentRanking(studentRanking);
};
let rank = 1;
const showStudentRanking = (students) =>{
    students.sort((a, b) =>{
      if (a.totalPoint !== b.totalPoint) {
        return b.totalPoint - a.totalPoint; // Sort by ranking
    } else {
        return a.solveTime - b.solveTime; // If ranking is the same, sort by total time
    }
    });
    
    let rank = 1;
    students.forEach(student => {
        const studentTable = document.getElementById('student-rank');
        const newStudentData = document.createElement('tr');
        newStudentData.classList = 'text-center bg-transparent hover:bg-stone-200  hover:bg-opacity-50 shadow-lg';
       if(rank ==1){
        newStudentData.classList ='text-center bg-green-400 hover:bg-stone-200  hover:bg-opacity-50 shadow-lg';
       }
       else if(rank ==2){
        newStudentData.classList ='text-center bg-green-300 hover:bg-stone-200  hover:bg-opacity-50 shadow-lg';
       }
       else if(rank ==3){
        newStudentData.classList ='text-center bg-green-200 hover:bg-stone-200  hover:bg-opacity-50 shadow-lg';
       }
        newStudentData.innerHTML = `
        <td>${rank++}</td>
        <td>${student.totalPoint}</td>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.totalAttendance}</td>
        <td>${student.contestCount}</td>
        <td>${student.solveCount}</td>
        <td>${student.solveTime}</td>
        `;
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('loading').classList.remove('flex');
        studentTable.append(newStudentData);
    });
}
studentApi();
