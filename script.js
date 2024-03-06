const studentApi = async () => {
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("loading").classList.add("flex");
  document.getElementById('rank-table').classList.add('hidden');
  document.getElementById('top-three').classList.add('hidden');
  const res = await fetch("https://sheetdb.io/api/v1/xzodpywpk6f9y");
  const data = await res.json();
  const studentRanking = data;
  showStudentRanking(studentRanking);
};
let rank = 1;
const showStudentRanking = (students) => {
  students.sort((a, b) => {
    if (a.totalPoint !== b.totalPoint) {
      return b.totalPoint - a.totalPoint; // Sort by ranking
    } else {
      return a.solveTime - b.solveTime; // If ranking is the same, sort by total time
    }
  });

  let rank = 1;
  students.forEach((student) => {
    const studentTable = document.getElementById("student-rank");
    const newStudentData = document.createElement("tr");
    newStudentData.classList =
      "text-center bg-transparent hover:bg-stone-200  hover:bg-opacity-50 shadow-lg";

    if (rank == 1) {
      document.getElementById("rank-one-img").innerHTML = `
        <img src="${student.image}" />
        `;
      document.getElementById("rank-one-name").innerText = `
        ${student.name}
        `;
      document.getElementById("rank-one-score").innerText = `
        Score : ${student.totalPoint}
        `;
        document.getElementById('rank-one').innerText = `
        Rank : #${rank++}
        `;
    } else if (rank == 2) {
      document.getElementById("rank-two-img").innerHTML = `
        <img src="${student.image}" />
        `;
      document.getElementById("rank-two-name").innerText = `
        ${student.name}
        `;
      document.getElementById("rank-two-score").innerText = `
      Score : ${student.totalPoint}
        `;
        document.getElementById('rank-two').innerText = `
        Rank : #${rank++}
        `;
    } else if (rank == 3) {
      document.getElementById("rank-three-img").innerHTML = `
        <img src="${student.image}" />
        `;
      document.getElementById("rank-three-name").innerText = `
        ${student.name}
        `;
      document.getElementById("rank-three-score").innerText = `
      Score : ${student.totalPoint}
        `;
        document.getElementById('rank-three').innerText = `
        Rank : #${rank++}
        `;
    } else {
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
      document.getElementById("loading").classList.add("hidden");
      document.getElementById("loading").classList.remove("flex");
      document.getElementById('rank-table').classList.remove('hidden');
      document.getElementById('top-three').classList.remove('hidden');
      studentTable.append(newStudentData);
    }
  });
};
studentApi();
