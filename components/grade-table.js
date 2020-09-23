class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;

    // this.noGradesElement = noGradesElement;

  }

  updateGrades(grades){

    this.tableElement.textContent = "";
    console.log(this.tableElement);
   if(grades.length === 0) {
      var noneTr = document.createElement("tr");
      var noneTd = document.createElement("td");
      noneTd.textContent = "No Grades Recorded";

      noneTr.append(noneTd);
      this.tableElement.append(noneTr);
    } else {
    for(var i = 0; i < grades.length;i++) {
    var renderTable = this.renderGradeRow(grades[i],this.deleteGrade);
    this.tableElement.append(renderTable);
    }
    }
 }
 onDeleteClick(deleteGrade) {
   this.deleteGrade = deleteGrade;
 }

 renderGradeRow(data,deleteGrade) {
   var tr = document.createElement("tr");
   console.log(tr);
   var studentTd = document.createElement("td");
   var courseTd = document.createElement("td");
   var gradeTd = document.createElement("td");
   var operationsTd = document.createElement("td");

   studentTd.textContent = data.name;
   courseTd.textContent = data.course;
   gradeTd.textContent = data.grade;

   var deleteBtn = document.createElement("button");
   deleteBtn.classList.add("btn-warning");
   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener("click", function() {

    deleteGrade(data.id);
    });

   operationsTd.append(deleteBtn);
   tr.append(studentTd,courseTd,gradeTd,operationsTd);

   this.tableElement.append(tr);

   return tr;
  }
}
