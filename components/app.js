class App {
  constructor(gradeTable,pageHeader,gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);

}
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {

    this.gradeTable.updateGrades(grades);
    var sum = 0;


    for(var i = 0; i < grades.length; i++) {
     sum += grades[i].grade;

    }
    var average = sum/grades.length;
    this.pageHeader.updateAverage(average);
  }

  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "X-Access-Token":"nsXceUhs"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError

    })
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);

  }
  createGrade(name,course,grade) {
    console.log(name,course,grade);
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      data: {
        "name":name,
        "course":course,
        "grade":grade
      },
      headers: {
        "X-Access-Token":"nsXceUhs"
      },
      success:this.handleCreateGradeSuccess,
      error:this.handleCreateGradeError
    });

  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  deleteGrade(id) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "DELETE",
      headers: {
        "X-Access-Token":"nsXceUhs"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    });
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }
}
