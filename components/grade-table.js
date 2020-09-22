class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades){
    console.table(grades);
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent ="";

    for(var i = 0; i < grades.length;i++) {
      var tr = document.createElement("tr");
      var studentTd = document.createElement("td");
      var courseTd = document.createElement("td");
      var gradeTd = document.createElement("td");

      studentTd.textContent = grades[i].name;
      courseTd.textContent = grades[i].course;
      gradeTd.textContent = grades[i].grade;

      tr.append(studentTd,courseTd,gradeTd);
      tbody.appendChild(tr);

    }

  }
}
